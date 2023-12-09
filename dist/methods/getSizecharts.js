import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getSizechartsProxy = (object) => {
    object.gate = { method: 'get', node: '/sizecharts/sizecharts' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}