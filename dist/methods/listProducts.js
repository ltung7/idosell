import { paramsProxy } from "../params.js";

export const listProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products/get' }
    return new Proxy(object, paramsProxy);
}