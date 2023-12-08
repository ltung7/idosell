import { paramsProxy } from "../params.js";

export const putMenuSortProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/sort' }
    object.rootparams = true
    return new Proxy(object, paramsProxy);
}