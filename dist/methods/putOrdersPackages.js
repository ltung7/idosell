import { paramsProxy } from "../params.js";

export const putOrdersPackagesProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/packages' }
    return new Proxy(object, paramsProxy);
}