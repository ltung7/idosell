import { paramsProxy } from "../params.js";

export const getWarrantiesCountTotalProxy = (object) => {
    object.gate = { method: 'get', node: '/warranties/countTotal' }
    return new Proxy(object, paramsProxy);
}