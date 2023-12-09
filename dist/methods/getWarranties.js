import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getWarrantiesProxy = (object) => {
    object.gate = { method: 'get', node: '/warranties/warranties' }
    object.custom = {
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}