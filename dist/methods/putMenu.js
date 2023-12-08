import { paramsProxy } from "../params.js";

export const putMenuProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/menu' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}