import { paramsProxy } from "../params.js";

export const postProductsRestoreProxy = (object) => {
    object.gate = { method: 'post', node: '/products/restore' }
    return new Proxy(object, paramsProxy);
}