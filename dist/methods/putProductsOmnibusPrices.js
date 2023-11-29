import { paramsProxy } from "../params.js";

export const putProductsOmnibusPricesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/omnibusPrices' }
    return new Proxy(object, paramsProxy);
}