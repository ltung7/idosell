import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about the amount of loyalty points collected by customers in a loyalty program.
 * @typedef {Object} GetClientsProfitPointsRequest
 * @property {(clientsIds: Array<Integer>) => GetClientsProfitPointsRequest} clientsIds Customer numbers.
 * @property {(clientTextSearch: String) => GetClientsProfitPointsRequest} clientTextSearch Text search through customer data.
 * @property {(clientIsActive: String) => GetClientsProfitPointsRequest} clientIsActive Active
 * @property {(clientHasTradeCredit: String) => GetClientsProfitPointsRequest} clientHasTradeCredit Trade credit: - positive or negative, - only positive, - only negative, - only zero.
 * @property {(clientLastPurchaseDate: Object) => GetClientsProfitPointsRequest} clientLastPurchaseDate Date of last purchase.
 * @property {(returnElements: Array<String>) => GetClientsProfitPointsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsProfitPointsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsProfitPointsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsProfitPointsRequest} Method that enables extracting information about the amount of loyalty points collected by customers in a loyalty program.
 */
export const getClientsProfitPointsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/profitPoints' }
    return new Proxy(object, paramsProxy);
}