import { paramsProxy } from "../params.js";

export const deleteMenuProxy = (object) => {
    object.gate = { method: 'post', node: '/menu/menu/delete' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}