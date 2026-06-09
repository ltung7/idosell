// ─── Errors ──────────────────────────────────────────────────────────────────
export class WebhookValidationError extends Error {
    field;
    constructor(message, field) {
        super(message);
        this.field = field;
        this.name = `WebhookValidationError ${field}`;
    }
}
// ─── Internal helpers ────────────────────────────────────────────────────────
function requireHeader(headers, key) {
    const value = headers[key];
    if (!value || value.trim() === "") {
        throw new WebhookValidationError(`Missing or empty required header: ${key}`, key);
    }
    return value.trim();
}
function parseIntHeader(headers, key) {
    const raw = requireHeader(headers, key);
    const n = Number(raw);
    if (!Number.isInteger(n) || n < 0) {
        throw new WebhookValidationError(`Header ${key} must be a positive integer, got: "${raw}"`, key);
    }
    return n;
}
function parseDateHeader(headers, key) {
    const raw = requireHeader(headers, key);
    const date = new Date(raw);
    if (isNaN(date.getTime())) {
        throw new WebhookValidationError(`Header ${key} is not a valid date string, got: "${raw}"`, key);
    }
    return date;
}
function parseAuthHeader(headers) {
    const raw = requireHeader(headers, "authorization");
    const [scheme, token] = raw.split(" ");
    if (scheme?.toLowerCase() !== "bearer" || !token) {
        throw new WebhookValidationError(`Authorization header must use Bearer scheme, got: "${raw}"`, "authorization");
    }
    return token;
}
export function extractHeaders(raw) {
    return {
        token: parseAuthHeader(raw),
        apiVersion: parseIntHeader(raw, "x-iai-api-version"),
        eventTime: parseDateHeader(raw, "x-iai-event-time"),
        eventType: requireHeader(raw, "x-iai-event-type"),
        eventUid: requireHeader(raw, "x-iai-event-uid"),
        objectType: requireHeader(raw, "x-iai-object-type"),
        panelId: parseIntHeader(raw, "x-iai-panel-id"),
        signature: requireHeader(raw, "x-iai-signature"),
        webhookTime: parseDateHeader(raw, "x-iai-webhook-time"),
        raw
    };
}
// ─── Type guard ──────────────────────────────────────────────────────────────
function isWebRequest(req) {
    return typeof req.json === "function";
}
// ─── Raw headers flattening ──────────────────────────────────────────────────
function flattenNodeHeaders(headers) {
    const out = {};
    for (const [key, value] of Object.entries(headers)) {
        if (value !== undefined) {
            out[key.toLowerCase()] = Array.isArray(value) ? value.join(", ") : value;
        }
    }
    return out;
}
function flattenWebHeaders(headers) {
    const out = {};
    headers.forEach((value, key) => { out[key.toLowerCase()] = value; });
    return out;
}
function readNodeStream(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
        req.on("error", reject);
    });
}
// ─── Main normalizer ─────────────────────────────────────────────────────────
/**
 * Parses and validates an incoming IAI webhook request from any of:
 *   - Express          (pass req directly — do NOT attach express.json())
 *   - Next.js Pages    (disable bodyParser in route config)
 *   - Next.js App      (Web Fetch API Request)
 *   - SvelteKit        (Web Fetch API Request — pass event.request)
 *
 * Throws WebhookValidationError for any missing/malformed header or empty body.
 *
 * @example Express
 * app.post('/webhook', async (req, res) => {
 *   const { headers, body } = await normalizeIaiRequest(req);
 * });
 *
 * @example SvelteKit
 * export async function POST({ request }) {
 *   const { headers, body } = await normalizeIaiRequest(request);
 * }
 *
 * @example Next.js App Router
 * export async function POST(request: Request) {
 *   const { headers, body } = await normalizeIaiRequest(request);
 * }
 *
 * @example Next.js Pages Router (add export const config = { api: { bodyParser: false } })
 * export default async function handler(req, res) {
 *   const { headers, body } = await normalizeIaiRequest(req);
 * }
 */
export async function normalizeIaiRequest(req) {
    let flatHeaders;
    let rawBody;
    if (isWebRequest(req)) {
        flatHeaders = flattenWebHeaders(req.headers);
        rawBody = await req.text();
    }
    else {
        flatHeaders = flattenNodeHeaders(req.headers);
        rawBody = req.body !== undefined
            ? JSON.stringify(req.body)
            : await readNodeStream(req);
    }
    if (!rawBody || rawBody.trim() === "") {
        throw new WebhookValidationError("Request body is empty", "body");
    }
    let body;
    try {
        body = JSON.parse(rawBody);
    }
    catch {
        throw new WebhookValidationError("Request body is not valid JSON", "body");
    }
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        throw new WebhookValidationError("Request body must be a JSON object", "body");
    }
    const headers = extractHeaders(flatHeaders);
    return { headers, body, rawBody };
}
