import { paramsProxy } from "../params.js";

export const deleteMenuProxy = (object) => {
    object.gate = { method: 'post', node: '/menu/menu/delete' }
    return new Proxy(object, paramsProxy);
}