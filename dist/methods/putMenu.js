import { paramsProxy } from "../params.js";

export const putMenuProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/menu' }
    return new Proxy(object, paramsProxy);
}