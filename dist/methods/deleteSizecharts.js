import { paramsProxy } from "../params.js";

export const deleteSizechartsProxy = (object) => {
    object.gate = { method: 'post', node: '/sizecharts/sizecharts/delete' }
    return new Proxy(object, paramsProxy);
}