import { paramsProxy } from "../params.js";

export const postPackagesProxy = (object) => {
    object.gate = { method: 'post', node: '/packages/packages' }
    return new Proxy(object, paramsProxy);
}