import { paramsProxy } from "../params.js";

/**
 * The method allows to add buyer's addresses to sales documents, for existing customer accounts in the IdoSell administration panel.
 * @typedef {Object} PostClientsPayerAddressRequest
 * @property {(payers: Array<Object>) => PostClientsPayerAddressRequest} payers 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostClientsPayerAddressRequest} The method allows to add buyer's addresses to sales documents, for existing customer accounts in the IdoSell administration panel.
 */
export const postClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/payerAddress' }
    return new Proxy(object, paramsProxy);
}