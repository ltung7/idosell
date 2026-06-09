import type {
    SearchProductsResponse,
    GetRmaResponse,
    GetReturnsResponse,
    GetOrdersResponse,
    GetClientsResponse,
} from "./responses.d.ts";

export interface ExecutableDumpParams {
    url: string;
    method: string;
    params: Record<string, any>;
}

export interface ExecutableOptions {
    log?: boolean | ((obj: ExecutableDumpParams) => void),
    dump?: boolean | ((obj: ExecutableDumpParams) => void),
    logPage?: boolean | ((text: string) => void),
    skipCheck?: boolean
}

export type DateLike = string | number | Date;

export type JSObject = Record<string, any>;

export type RequestProxyObject = {
    auth: {
        url: string,
        apiKey: string,
        version: number | string
    },
    params: Record<string, any>,
}

export type RequirementType = {
    any: string[] | true
} | string | ((arg: RequestProxyObject | Record<string, any>) => string | false);

export type GatewayRequestProxyObject = {
    gate: {
        method: 'get' | 'post' | 'put' | 'delete',
        node: string
    },
    appendable?: {
        index: number,
        arrayNode: string,
        except: string[]
    },
    custom?: Record<string, (..._: any) => false | Record<string, any>>,
    snakeCase?: boolean,
    paginationObject?: boolean,
    next?: boolean,
    rootparams?: string | boolean,
    arrays?: string[],
    req?: RequirementType[],
    n?: Record<string, number>
} & RequestProxyObject;

export interface Gateway<R = JSObject, P = JSObject> {
    /**
     * Executes the query to designated API endpoint
     * @param options Use options: log - to console log params, url and method, logPage - to console log current page in a loop
     * @returns Idosell response
     */
    exec: (options?: ExecutableOptions) => Promise<R>,

    /**
     * @returns Object with currently mapped parameters
     */
    getParams: () => P,

    /**
     * @description Set object as params
     */
    setParams: (params: P) => this

    /**
     * @description Checks if minimal parameters are provided. If not, throws an error.
     */
    checkParams: () => void
}

export interface PagableGateway<T, R = JSObject, P = JSObject> extends Gateway<R, P> {
    /**
     * @returns number of items i.e. products, orders, documents, etc.
     */
    count: () => Promise<number>,

    /**
     * Allows to change offset and number of records returned
     * @param pageNumber - The page number to navigate to.
     * @param pageSize - The size of page
     * @returns The updated instance for method chaining.
     */
    page: (pageNumber: number, pageSize?: number) => T

    /**
     * @returns If completed request has more pages
     */
    hasNext: () => boolean
}

export interface AppendableGateway<T, R = JSObject, P = JSObject> extends Gateway<R, P> {
    /**
     * Start creating next item in list
     */
    append: () => T
}

export interface IdosellErrorFaultStructure {
    faultCode: number;
    faultString: string;
}

// ─── Final normalized shape ──────────────────────────────────────────────────

export interface NormalizedIaiRequest<T = unknown> {
    headers: IaiWebhookHeaders;
    body: T;
    rawBody: string
}

export declare const WEBHOOK_OBJECT_TYPE: {
    readonly CLIENT: "client";
    readonly PRODUCT: "product";
    readonly ORDER: "order";
    readonly RETURN: "return";
    readonly RMA: "rma";
};

export declare const WEBHOOK_EVENT_TYPE: {
    readonly CLIENT_CREATED: "clientCreated";
    readonly CLIENT_UPDATED: "clientUpdated";
    readonly PRODUCT_CREATED: "productCreated";
    readonly PRODUCT_UPDATED: "productUpdated";
    readonly PRODUCT_PRICE_UPDATED: "productPriceUpdated";
    readonly PRODUCT_STOCK_UPDATED: "productStockUpdated";
    readonly PRODUCT_DISPOSITION_UPDATED: "productDispositionUpdated";
    readonly ORDER_CREATED: "orderCreated";
    readonly ORDER_UPDATED: "orderUpdated";
    readonly ORDER_PAID: "orderPaid";
    readonly ORDER_STATUS_UPDATED: "orderStatusUpdated";
    readonly ORDER_PACKAGE_CREATED: "orderPackageCreated";
    readonly ORDER_FILES_CREATED: "orderFilesCreated";
    readonly ORDER_SALE_DOCUMENT_CREATED: "orderSaleDocumentCreated";
    readonly ORDER_SALE_DOCUMENT_UPDATED: "orderSaleDocumentUpdated";
    readonly ORDER_SENT: "orderSent";
    readonly ORDER_DELIVERED: "orderDelivered";
    readonly ORDER_CANCELED: "orderCanceled";
    readonly RETURN_CREATED: "returnCreated";
    readonly RETURN_UPDATED: "returnUpdated";
    readonly RETURN_FUNDS_CONFIRMED: "returnFundsConfirmed";
    readonly RETURN_PACKAGE_CREATED: "returnPackageCreated";
    readonly RETURN_CONFIRMED: "returnConfirmed";
    readonly RETURN_CANCELED: "returnCanceled";
    readonly RMA_CREATED: "rmaCreated";
    readonly RMA_UPDATED: "rmaUpdated";
    readonly RMA_PACKAGE_CREATED: "rmaPackageCreated";
    readonly RMA_APPROVED: "rmaApproved";
    readonly RMA_REJECTED: "rmaRejected";
};

export type WebhookObjectType = typeof WEBHOOK_OBJECT_TYPE[keyof typeof WEBHOOK_OBJECT_TYPE];
export type WebhookEventType = typeof WEBHOOK_EVENT_TYPE[keyof typeof WEBHOOK_EVENT_TYPE];

export interface ObjectBodyMap {
    "client": GetClientsResponse;
    "product": SearchProductsResponse;
    "order": GetOrdersResponse;
    "return": GetReturnsResponse;
    "rma": GetRmaResponse;
}

interface EventObjectMap {
    "clientCreated": "client";
    "clientUpdated": "client";
    "productCreated": "product";
    "productUpdated": "product";
    "productPriceUpdated": "product";
    "productStockUpdated": "product";
    "productDispositionUpdated": "product";
    "orderCreated": "order";
    "orderUpdated": "order";
    "orderPaid": "order";
    "orderStatusUpdated": "order";
    "orderPackageCreated": "order";
    "orderFilesCreated": "order";
    "orderSaleDocumentCreated": "order";
    "orderSaleDocumentUpdated": "order";
    "orderSent": "order";
    "orderDelivered": "order";
    "orderCanceled": "order";
    "returnCreated": "return";
    "returnUpdated": "return";
    "returnFundsConfirmed": "return";
    "returnPackageCreated": "return";
    "returnConfirmed": "return";
    "returnCanceled": "return";
    "rmaCreated": "rma";
    "rmaUpdated": "rma";
    "rmaPackageCreated": "rma";
    "rmaApproved": "rma";
    "rmaRejected": "rma";
}

// ─── Parsed & renamed headers ────────────────────────────────────────────────

export interface IaiWebhookHeaders {
    token: string;
    apiVersion: number;
    eventTime: Date;
    objectType: WebhookObjectType;
    eventType: WebhookEventType;
    eventUid: string;
    panelId: number;
    signature: string;
    webhookTime: Date;
    raw: Record<string, string>
}

export interface WebhookContext<E extends WebhookEventType> {
    headers: IaiWebhookHeaders;
    body: ObjectBodyMap[EventObjectMap[E]];
    rawBody: string;
}

export interface WebhookObjectContext<O extends WebhookObjectType> {
    headers: IaiWebhookHeaders;
    body: ObjectBodyMap[O];
    rawBody: string;
}

export type WebhookHandler<E extends WebhookEventType> =
    (ctx: WebhookContext<E>) => Promise<void> | void;

export type WebhookObjectHandler<O extends WebhookObjectType> =
    (ctx: WebhookObjectContext<O>) => Promise<void> | void;

export type HeaderValidator =
    (headers: IaiWebhookHeaders) => Promise<boolean> | boolean;

export type DispatchResult =
    | { matched: true; eventType: WebhookEventType }
    | { matched: false; eventType: string }
    | { matched: false; eventType: null; reason: "validation_failed" };


export interface RawWebhookInput {
    headers: Record<string, string>;
    rawBody: string;           // always string — pre-parse
    body?: Record<string, unknown>; // optional — caller may pre-parse
}

export declare class WebhookChain {
    validateHeaders(validator: HeaderValidator): this;
    validateSignature(hmacKey: string): this;
    on<E extends WebhookEventType>(eventType: E, handler: WebhookHandler<E>): this;
    on<O extends WebhookObjectType>(objectType: O, handler: WebhookObjectHandler<O>): this;
    handle(req: import("node:http").IncomingMessage | Request): Promise<DispatchResult>;
    handleRaw(req: RawWebhookInput): Promise<DispatchResult>;
}

export type Webhooks = {
    validateHeaders(validator: HeaderValidator): WebhookChain;
    validateSignature(hmacKey: string): WebhookChain;
    on<E extends WebhookEventType>(eventType: E, handler: WebhookHandler<E>): WebhookChain;
    on<O extends WebhookObjectType>(objectType: O, handler: WebhookObjectHandler<O>): WebhookChain;
};

export { };