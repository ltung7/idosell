import { paramsProxy } from "../params.js";

export const postOrdersPackagesProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/packages' }
    return new Proxy(object, paramsProxy);
}