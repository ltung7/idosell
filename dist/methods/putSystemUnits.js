import { paramsProxy } from "../params.js";

export const putSystemUnitsProxy = (object) => {
    object.gate = { method: 'put', node: '/system/units' }
    return new Proxy(object, paramsProxy);
}