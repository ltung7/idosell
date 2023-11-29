import { paramsProxy } from "../params.js";

export const getMenuFilterProxy = (object) => {
    object.gate = { method: 'get', node: '/menu/filter' }
    return new Proxy(object, paramsProxy);
}