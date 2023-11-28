import { paramsProxy } from "../params.js";

/**
 * Method that enables editing the delivery address details for existing customer accounts.
 * @typedef {Object} PutClientsDeliveryAddressRequest
 * @property {(clients: Array<Object>) => PutClientsDeliveryAddressRequest} clients Customer data.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsDeliveryAddressRequest} Method that enables editing the delivery address details for existing customer accounts.
 */
export const putClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/deliveryAddress' }
    return new Proxy(object, paramsProxy);
}