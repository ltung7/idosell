import { paramsProxy } from "../params.js";

export const putOrdersCourierProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/courier' }
    return new Proxy(object, paramsProxy);
}