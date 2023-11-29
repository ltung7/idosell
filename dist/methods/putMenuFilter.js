import { paramsProxy } from "../params.js";

export const putMenuFilterProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/filter' }
    return new Proxy(object, paramsProxy);
}