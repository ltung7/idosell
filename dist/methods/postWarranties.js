import { paramsProxy } from "../params.js";

export const postWarrantiesProxy = (object) => {
    object.gate = { method: 'post', node: '/warranties/warranties' }
    return new Proxy(object, paramsProxy);
}