import { paramsProxy } from "../params.js";

export const postMenuProxy = (object) => {
    object.gate = { method: 'post', node: '/menu/menu' }
    return new Proxy(object, paramsProxy);
}