import { paramsProxy } from "../params.js";

export const getOrdersOpinionsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/opinions' }
    return new Proxy(object, paramsProxy);
}