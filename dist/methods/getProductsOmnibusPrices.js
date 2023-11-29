import { paramsProxy } from "../params.js";

export const getProductsOmnibusPricesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/omnibusPrices' }
    return new Proxy(object, paramsProxy);
}