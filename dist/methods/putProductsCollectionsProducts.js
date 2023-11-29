import { paramsProxy } from "../params.js";

export const putProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/collections/products' }
    return new Proxy(object, paramsProxy);
}