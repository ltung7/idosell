import { paramsProxy } from "../params.js";

export const putOrdersShippingCostsProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/shippingCosts' }
    return new Proxy(object, paramsProxy);
}