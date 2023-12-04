import { paramsProxy } from "../params.js";
import { dateRange, page } from "../helpers.js";

export const getClientsPricesDiscountsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/prices/discounts' }
    object.custom = {
        lastPurchased: dateRange({"nodeName":"clientLastPurchaseDate","fromName":"clientLastPurchaseDateBegin","toName":"clientLastPurchaseDateEnd"}),
        page
    };
    return new Proxy(object, paramsProxy);
}