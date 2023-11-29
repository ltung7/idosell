import { paramsProxy } from "../params.js";

export const putClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/deliveryAddress' }
    return new Proxy(object, paramsProxy);
}