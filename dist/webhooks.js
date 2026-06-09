/* eslint-disable no-unused-vars */
import { extractHeaders, normalizeIaiRequest, WebhookValidationError } from "./webhooks.normalizer.js";
import { createHmac } from "node:crypto";
// ─── Runtime constants ────────────────────────────────────────────────────────
export const WEBHOOK_OBJECT_TYPE = {
    CLIENT: "client",
    PRODUCT: "product",
    ORDER: "order",
    RETURN: "return",
    RMA: "rma",
};
export const WEBHOOK_EVENT_TYPE = {
    CLIENT_CREATED: "clientCreated",
    CLIENT_UPDATED: "clientUpdated",
    PRODUCT_CREATED: "productCreated",
    PRODUCT_UPDATED: "productUpdated",
    PRODUCT_PRICE_UPDATED: "productPriceUpdated",
    PRODUCT_STOCK_UPDATED: "productStockUpdated",
    PRODUCT_DISPOSITION_UPDATED: "productDispositionUpdated",
    ORDER_CREATED: "orderCreated",
    ORDER_UPDATED: "orderUpdated",
    ORDER_PAID: "orderPaid",
    ORDER_STATUS_UPDATED: "orderStatusUpdated",
    ORDER_PACKAGE_CREATED: "orderPackageCreated",
    ORDER_FILES_CREATED: "orderFilesCreated",
    ORDER_SALE_DOCUMENT_CREATED: "orderSaleDocumentCreated",
    ORDER_SALE_DOCUMENT_UPDATED: "orderSaleDocumentUpdated",
    ORDER_SENT: "orderSent",
    ORDER_DELIVERED: "orderDelivered",
    ORDER_CANCELED: "orderCanceled",
    RETURN_CREATED: "returnCreated",
    RETURN_UPDATED: "returnUpdated",
    RETURN_FUNDS_CONFIRMED: "returnFundsConfirmed",
    RETURN_PACKAGE_CREATED: "returnPackageCreated",
    RETURN_CONFIRMED: "returnConfirmed",
    RETURN_CANCELED: "returnCanceled",
    RMA_CREATED: "rmaCreated",
    RMA_UPDATED: "rmaUpdated",
    RMA_PACKAGE_CREATED: "rmaPackageCreated",
    RMA_APPROVED: "rmaApproved",
    RMA_REJECTED: "rmaRejected",
};
// ─── Runtime event → object map ───────────────────────────────────────────────
const EVENT_OBJECT_MAP = {
    clientCreated: "client",
    clientUpdated: "client",
    productCreated: "product",
    productUpdated: "product",
    productPriceUpdated: "product",
    productStockUpdated: "product",
    productDispositionUpdated: "product",
    orderCreated: "order",
    orderUpdated: "order",
    orderPaid: "order",
    orderStatusUpdated: "order",
    orderPackageCreated: "order",
    orderFilesCreated: "order",
    orderSaleDocumentCreated: "order",
    orderSaleDocumentUpdated: "order",
    orderSent: "order",
    orderDelivered: "order",
    orderCanceled: "order",
    returnCreated: "return",
    returnUpdated: "return",
    returnFundsConfirmed: "return",
    returnPackageCreated: "return",
    returnConfirmed: "return",
    returnCanceled: "return",
    rmaCreated: "rma",
    rmaUpdated: "rma",
    rmaPackageCreated: "rma",
    rmaApproved: "rma",
    rmaRejected: "rma",
};
export class WebhookChain {
    slots = [];
    validator = null;
    hmacKey;
    validateHeaders(validator) {
        this.validator = validator;
        return this;
    }
    /**
     * Validate the request signature using HMAC SHA256.
     * @param hmacKey Secret key used to compute the HMAC.
     * @throws WebhookValidationError if the computed signature does not match the header.
     */
    validateSignature(hmacKey) {
        this.hmacKey = hmacKey;
        return this;
    }
    on(eventTypeOrObject, handler) {
        const isObjectType = Object.values(WEBHOOK_OBJECT_TYPE).includes(eventTypeOrObject);
        if (isObjectType) {
            const matchedEvents = Object.entries(EVENT_OBJECT_MAP)
                .filter(([, obj]) => obj === eventTypeOrObject)
                .map(([evt]) => evt);
            for (const evt of matchedEvents) {
                this.slots.push({ eventType: evt, fn: handler });
            }
        }
        else {
            this.slots.push({ eventType: eventTypeOrObject, fn: handler });
        }
        return this;
    }
    async handle(req) {
        const { headers, body, rawBody } = await normalizeIaiRequest(req);
        return this.dispatch(headers, body, rawBody);
    }
    async handleRaw({ headers: rawHeaders, rawBody, body }) {
        const headers = extractHeaders(rawHeaders);
        const parsedBody = body ?? JSON.parse(rawBody);
        return this.dispatch(headers, parsedBody, rawBody);
    }
    async dispatch(headers, body, rawBody) {
        if (this.validator !== null) {
            let valid = false;
            try {
                valid = await this.validator(headers);
            }
            catch {
                valid = false;
            }
            if (!valid) {
                return { matched: false, eventType: null, reason: "validation_failed" };
            }
        }
        if (this.hmacKey) {
            const computed = createHmac("sha256", this.hmacKey).update(rawBody).digest("hex");
            if (computed !== headers.signature) {
                throw new WebhookValidationError("Invalid webhook signature", "x-iai-signature");
            }
        }
        const incomingEvent = headers.eventType;
        const expectedObject = EVENT_OBJECT_MAP[incomingEvent];
        if (expectedObject !== undefined && headers.objectType !== expectedObject) {
            throw new WebhookValidationError(`eventType "${incomingEvent}" expects objectType "${expectedObject}", got "${headers.objectType}"`, "x-iai-object-type");
        }
        const slot = this.slots.find(s => s.eventType === incomingEvent);
        if (!slot) {
            return { matched: false, eventType: incomingEvent };
        }
        await slot.fn({ headers, body, rawBody });
        return { matched: true, eventType: slot.eventType };
    }
}
// ─── Entry point ──────────────────────────────────────────────────────────────
export const webhooks = {
    validateHeaders(validator) {
        return new WebhookChain().validateHeaders(validator);
    },
    validateSignature(hmacKey) {
        return new WebhookChain().validateSignature(hmacKey);
    },
    on: ((eventTypeOrObject, handler) => {
        return new WebhookChain().on(eventTypeOrObject, handler);
    }),
};
export default webhooks;
