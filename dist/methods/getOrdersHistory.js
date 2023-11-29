import { paramsProxy } from "../params.js";

export const getOrdersHistoryProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/history' }
    return new Proxy(object, paramsProxy);
}