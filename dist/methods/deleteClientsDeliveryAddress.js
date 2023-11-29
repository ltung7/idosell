import { paramsProxy } from "../params.js";

export const deleteClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/deliveryAddress/delete' }
    return new Proxy(object, paramsProxy);
}