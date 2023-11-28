import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about delivery addresses assigned to existing customer accounts.
 * @typedef {Object} GetClientsDeliveryAddressRequest
 * @property {(clientCodesExternal: Array<String>) => GetClientsDeliveryAddressRequest} clientCodesExternal External system codes list.
 * @property {(clientIds: Array<Integer>) => GetClientsDeliveryAddressRequest} clientIds Customer ID.
 * @property {(clientLogins: Array<String>) => GetClientsDeliveryAddressRequest} clientLogins Customer's login.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsDeliveryAddressRequest} Method that enables extracting information about delivery addresses assigned to existing customer accounts.
 */
export const getClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/deliveryAddress' }
    return new Proxy(object, paramsProxy);
}