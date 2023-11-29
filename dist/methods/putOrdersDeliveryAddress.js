import { paramsProxy } from "../params.js";

export const putOrdersDeliveryAddressProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/deliveryAddress' }
    return new Proxy(object, paramsProxy);
}