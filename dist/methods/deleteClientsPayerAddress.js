import { paramsProxy } from "../params.js";

/**
 * #!MetodaPozwalaNaUsuwanieNiewykorzystanychAdresowNabywcy!#
 * @typedef {Object} DeleteClientsPayerAddressRequest
 * @property {(payers: Array<Object>) => DeleteClientsPayerAddressRequest} payers 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteClientsPayerAddressRequest} #!MetodaPozwalaNaUsuwanieNiewykorzystanychAdresowNabywcy!#
 */
export const deleteClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/payerAddress/delete' }
    return new Proxy(object, paramsProxy);
}