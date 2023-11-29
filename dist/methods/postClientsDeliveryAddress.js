import { paramsProxy } from "../params.js";

export const postClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/deliveryAddress' }
    return new Proxy(object, paramsProxy);
}