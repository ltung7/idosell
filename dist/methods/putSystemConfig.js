import { paramsProxy } from "../params.js";

export const putSystemConfigProxy = (object) => {
    object.gate = { method: 'put', node: '/system/config' }
    return new Proxy(object, paramsProxy);
}