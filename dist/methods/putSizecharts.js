import { paramsProxy } from "../params.js";

export const putSizechartsProxy = (object) => {
    object.gate = { method: 'put', node: '/sizecharts/sizecharts' }
    return new Proxy(object, paramsProxy);
}