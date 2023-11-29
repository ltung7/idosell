import { paramsProxy } from "../params.js";

export const putOrdersProfitMarginProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/profitMargin' }
    return new Proxy(object, paramsProxy);
}