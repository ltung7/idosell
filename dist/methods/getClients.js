import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting customer account details.
 * @typedef {Object} GetClientsRequest
 * @property {(clientsIds: Array<Integer>) => GetClientsRequest} clientsIds Customer numbers.
 * @property {(clientCodesExternal: Array<String>) => GetClientsRequest} clientCodesExternal External system codes list
 * @property {(clientTextSearch: String) => GetClientsRequest} clientTextSearch Text search through customer data.
 * @property {(clientIsActive: String) => GetClientsRequest} clientIsActive Active
 * @property {(clientHasTradeCredit: String) => GetClientsRequest} clientHasTradeCredit Trade credit: - positive or negative, - only positive, - only negative, - only zero.
 * @property {(clientLastPurchaseDate: Object) => GetClientsRequest} clientLastPurchaseDate Date of last purchase.
 * @property {(clientsLastModificationDate: Object) => GetClientsRequest} clientsLastModificationDate Last modification date.
 * @property {(returnElements: Array<String>) => GetClientsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsRequest} Method that enables extracting customer account details.
 */
export const getClientsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/clients' }
    return new Proxy(object, paramsProxy);
}