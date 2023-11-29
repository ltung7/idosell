import { paramsProxy } from "../params.js";

export const deleteProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products/delete' }
    return new Proxy(object, paramsProxy);
}