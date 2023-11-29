import { paramsProxy } from "../params.js";

export const getSystemConfigProxy = (object) => {
    object.gate = { method: 'get', node: '/system/config' }
    return new Proxy(object, paramsProxy);
}