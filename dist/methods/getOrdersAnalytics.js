import { paramsProxy } from "../params.js";

export const getOrdersAnalyticsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/analytics' }
    return new Proxy(object, paramsProxy);
}