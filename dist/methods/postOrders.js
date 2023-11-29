import { paramsProxy } from "../params.js";

export const postOrdersProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/orders' }
    return new Proxy(object, paramsProxy);
}