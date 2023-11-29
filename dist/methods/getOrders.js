import { paramsProxy } from "../params.js";

export const getOrdersProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/orders' }
    return new Proxy(object, paramsProxy);
}