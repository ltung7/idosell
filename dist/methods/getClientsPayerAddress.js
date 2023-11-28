import { paramsProxy } from "../params.js";

/**
 * The method allows to retrieve buyer's addresses from sales documents, for existing customer accounts in the IdoSell administration panel.
 * @typedef {Object} GetClientsPayerAddressRequest
 * @property {(clientId: String) => GetClientsPayerAddressRequest} clientId Unique client's number.
 * @property {(resultsPage: Integer) => GetClientsPayerAddressRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPayerAddressRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsPayerAddressRequest} The method allows to retrieve buyer's addresses from sales documents, for existing customer accounts in the IdoSell administration panel.
 */
export const getClientsPayerAddressProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/payerAddress' }
    return new Proxy(object, paramsProxy);
}