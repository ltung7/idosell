import { paramsProxy } from "../params.js";

export const deleteProductsBundlesProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/products/delete' }
    return new Proxy(object, paramsProxy);
}