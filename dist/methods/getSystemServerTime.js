import { paramsProxy } from "../params.js";

export const getSystemServerTimeProxy = (object) => {
    object.gate = { method: 'get', node: '/system/serverTime' }
    return new Proxy(object, paramsProxy);
}