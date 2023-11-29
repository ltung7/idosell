import { paramsProxy } from "../params.js";

export const getSystemServerLoadProxy = (object) => {
    object.gate = { method: 'get', node: '/system/serverLoad' }
    return new Proxy(object, paramsProxy);
}