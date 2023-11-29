import { paramsProxy } from "../params.js";

export const postProductsBundlesProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/products' }
    return new Proxy(object, paramsProxy);
}