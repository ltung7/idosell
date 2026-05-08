import ENUMS from "./enums.js";
import utils from "./utils.js";
import { gateProxy } from "./gates.js";
import { IdosellFaultStringError, catchEmptyList } from "./errors.js";
export const DEFAULT_VERSION = 8;
function normalizeUrl(input = "") {
    if (!input.length)
        return "";
    const trimmed = input.trim();
    const withProtocol = trimmed
        .replace(/^https?:\/\//i, "") // strip existing protocol
        .replace(/^\/{2}/, ""); // strip bare // (protocol-relative)
    const normalized = `https://${withProtocol}`;
    let parsed;
    try {
        parsed = new URL(normalized);
    }
    catch {
        throw new Error(`Invalid URL: "${input}"`);
    }
    return parsed.origin;
}
const idosell = (url, apiKey, version = DEFAULT_VERSION) => {
    const auth = { url: normalizeUrl(url), apiKey, version, apikey: apiKey ? apiKey.slice(0, 6) + '*'.repeat(20) : "" };
    Object.defineProperty(auth, 'apiKey', { enumerable: false });
    const element = { auth, params: {} };
    return new Proxy(element, gateProxy);
};
export default idosell;
export { ENUMS, utils, IdosellFaultStringError, catchEmptyList };
