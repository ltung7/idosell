import { paramsProxy } from "../params.js";

/**
 * The method allows to modify buyer's addresses in sales documents, for existing customer accounts in the IdoSell administration panel.
 * @typedef {Object} PutClientsPayerAddressRequest
 * @property {(payers: Array<Object>) => PutClientsPayerAddressRequest} payers 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsPayerAddressRequest} The method allows to modify buyer's addresses in sales documents, for existing customer accounts in the IdoSell administration panel.
 */
export const putClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/payerAddress' }
    return new Proxy(object, paramsProxy);
}