import { paramsProxy } from "../params.js";

export const getProductsStrikethroughPricesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/strikethroughPrices' }
    return new Proxy(object, paramsProxy);
}