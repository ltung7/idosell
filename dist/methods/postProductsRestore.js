import { paramsProxy } from "../params.js";

export const postProductsRestoreProxy = (object) => {
    object.gate = { method: 'post', node: '/products/restore' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}