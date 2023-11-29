import { paramsProxy } from "../params.js";

export const deleteProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections/products/delete' }
    return new Proxy(object, paramsProxy);
}