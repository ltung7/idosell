import { paramsProxy } from "../params.js";

export const putProductsStrikethroughPricesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/strikethroughPrices' }
    return new Proxy(object, paramsProxy);
}