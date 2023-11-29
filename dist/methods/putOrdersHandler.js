import { paramsProxy } from "../params.js";

export const putOrdersHandlerProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/handler' }
    return new Proxy(object, paramsProxy);
}