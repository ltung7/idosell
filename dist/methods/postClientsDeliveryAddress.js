import { paramsProxy } from "../params.js";

/**
 * Method that enables adding delivery address details to existing customer accounts.
 * @typedef {Object} PostClientsDeliveryAddressRequest
 * @property {(clients: Array<Object>) => PostClientsDeliveryAddressRequest} clients Customer data.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostClientsDeliveryAddressRequest} Method that enables adding delivery address details to existing customer accounts.
 */
export const postClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/deliveryAddress' }
    return new Proxy(object, paramsProxy);
}