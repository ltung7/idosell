import { paramsProxy } from "../params.js";

export const getSystemUnitsProxy = (object) => {
    object.gate = { method: 'get', node: '/system/units' }
    return new Proxy(object, paramsProxy);
}