import { paramsProxy } from "../params.js";

export const getOrdersPackagesProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/packages' }
    return new Proxy(object, paramsProxy);
}