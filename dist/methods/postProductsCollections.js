import { paramsProxy } from "../params.js";

export const postProductsCollectionsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections' }
    return new Proxy(object, paramsProxy);
}