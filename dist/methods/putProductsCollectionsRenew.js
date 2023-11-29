import { paramsProxy } from "../params.js";

export const putProductsCollectionsRenewProxy = (object) => {
    object.gate = { method: 'put', node: '/products/collections/renew' }
    return new Proxy(object, paramsProxy);
}