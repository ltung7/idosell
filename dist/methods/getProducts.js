import { paramsProxy } from "../params.js";

export const getProductsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/products' }
    return new Proxy(object, paramsProxy);
}