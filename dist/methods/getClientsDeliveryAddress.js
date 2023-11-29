import { paramsProxy } from "../params.js";

export const getClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/deliveryAddress' }
    return new Proxy(object, paramsProxy);
}