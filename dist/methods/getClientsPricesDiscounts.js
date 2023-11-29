import { paramsProxy } from "../params.js";

export const getClientsPricesDiscountsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/prices/discounts' }
    return new Proxy(object, paramsProxy);
}