import { paramsProxy } from "../params.js";

export const postProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products' }
    return new Proxy(object, paramsProxy);
}