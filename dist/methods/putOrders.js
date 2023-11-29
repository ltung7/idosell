import { paramsProxy } from "../params.js";

export const putOrdersProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/orders' }
    return new Proxy(object, paramsProxy);
}