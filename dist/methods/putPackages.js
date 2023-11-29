import { paramsProxy } from "../params.js";

export const putPackagesProxy = (object) => {
    object.gate = { method: 'put', node: '/packages/packages' }
    return new Proxy(object, paramsProxy);
}