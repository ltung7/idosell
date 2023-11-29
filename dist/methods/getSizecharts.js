import { paramsProxy } from "../params.js";

export const getSizechartsProxy = (object) => {
    object.gate = { method: 'get', node: '/sizecharts/sizecharts' }
    return new Proxy(object, paramsProxy);
}