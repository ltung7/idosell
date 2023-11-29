import { paramsProxy } from "../params.js";

export const getPackagesProxy = (object) => {
    object.gate = { method: 'get', node: '/packages/packages' }
    return new Proxy(object, paramsProxy);
}