import { paramsProxy } from "../params.js";

export const getMenuProxy = (object) => {
    object.gate = { method: 'get', node: '/menu/menu' }
    return new Proxy(object, paramsProxy);
}