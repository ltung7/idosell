import { paramsProxy } from "../params.js";

export const putWarrantiesProxy = (object) => {
    object.gate = { method: 'put', node: '/warranties/warranties' }
    return new Proxy(object, paramsProxy);
}