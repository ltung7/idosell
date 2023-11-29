import { paramsProxy } from "../params.js";

export const postProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections/products' }
    return new Proxy(object, paramsProxy);
}