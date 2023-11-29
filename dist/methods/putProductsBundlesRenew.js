import { paramsProxy } from "../params.js";

export const putProductsBundlesRenewProxy = (object) => {
    object.gate = { method: 'put', node: '/products/bundles/renew' }
    return new Proxy(object, paramsProxy);
}