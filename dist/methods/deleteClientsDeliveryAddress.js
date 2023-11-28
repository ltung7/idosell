import { paramsProxy } from "../params.js";

/**
 * #!MetodaPozwalaNaUsuwanieNiewykorzystanychAdresowDostawDlaKontKlientow!#
 * @typedef {Object} DeleteClientsDeliveryAddressRequest
 * @property {(clients: Array<Object>) => DeleteClientsDeliveryAddressRequest} clients Customer data.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteClientsDeliveryAddressRequest} #!MetodaPozwalaNaUsuwanieNiewykorzystanychAdresowDostawDlaKontKlientow!#
 */
export const deleteClientsDeliveryAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/deliveryAddress/delete' }
    return new Proxy(object, paramsProxy);
}