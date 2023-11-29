import { paramsProxy } from "../params.js";

export const getOrdersOpinionsRateProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/opinionsRate' }
    return new Proxy(object, paramsProxy);
}