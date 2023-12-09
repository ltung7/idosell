import { paramsProxy } from "../params.js";

export const getOrdersLabelsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/labels' }
    return new Proxy(object, paramsProxy);
}