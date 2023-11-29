import { paramsProxy } from "../params.js";

export const getOrdersHandlerProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/handler' }
    return new Proxy(object, paramsProxy);
}