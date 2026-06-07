/* eslint-disable no-unused-vars */
import { normalizeIaiRequest, WebhookValidationError } from "./webhooks.normalizer.js";
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
    validateHeaders(validator) {
        this.validator = validator;
        return this;
    }
    on(eventType, handler) {
        this.slots.push({
            eventType,
            fn: handler,
        });
        return this;
    }
    async handle(req) {
        const { headers, body } = await normalizeIaiRequest(req);
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
        const incomingEvent = headers.eventType;
        const expectedObject = EVENT_OBJECT_MAP[incomingEvent];
        if (expectedObject !== undefined && headers.objectType !== expectedObject) {
            throw new WebhookValidationError(`eventType "${incomingEvent}" expects objectType "${expectedObject}", got "${headers.objectType}"`, "x-iai-object-type");
        }
        const slot = this.slots.find(s => s.eventType === incomingEvent);
        if (!slot) {
            return { matched: false, eventType: incomingEvent };
        }
        await slot.fn({ headers, body });
        return { matched: true, eventType: slot.eventType };
    }
}
// ─── Entry point ──────────────────────────────────────────────────────────────
export const webhooks = {
    validateHeaders(validator) {
        return new WebhookChain().validateHeaders(validator);
    },
    on(eventType, handler) {
        return new WebhookChain().on(eventType, handler);
    },
};
export default webhooks;
