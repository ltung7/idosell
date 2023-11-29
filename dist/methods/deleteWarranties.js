import { paramsProxy } from "../params.js";

export const deleteWarrantiesProxy = (object) => {
    object.gate = { method: 'post', node: '/warranties/warranties/delete' }
    return new Proxy(object, paramsProxy);
}