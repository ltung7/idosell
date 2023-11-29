import { paramsProxy } from "../params.js";

export const putClientsPricesDiscountsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/prices/discounts' }
    return new Proxy(object, paramsProxy);
}