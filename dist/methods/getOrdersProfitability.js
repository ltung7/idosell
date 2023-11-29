import { paramsProxy } from "../params.js";

export const getOrdersProfitabilityProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/profitability' }
    return new Proxy(object, paramsProxy);
}