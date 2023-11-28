import { paramsProxy } from "../params.js";

/**
 * Method that allows for extracting information about individual discounts assigned to customer accounts.
 * @typedef {Object} GetClientsPricesDiscountsRequest
 * @property {(clientsIds: Array<Integer>) => GetClientsPricesDiscountsRequest} clientsIds Customer numbers.
 * @property {(clientTextSearch: String) => GetClientsPricesDiscountsRequest} clientTextSearch Text search through customer data.
 * @property {(clientIsActive: String) => GetClientsPricesDiscountsRequest} clientIsActive Active
 * @property {(clientHasTradeCredit: String) => GetClientsPricesDiscountsRequest} clientHasTradeCredit Trade credit: - positive or negative, - only positive, - only negative, - only zero.
 * @property {(clientLastPurchaseDate: Object) => GetClientsPricesDiscountsRequest} clientLastPurchaseDate Date of last purchase.
 * @property {(returnElements: Array<String>) => GetClientsPricesDiscountsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsPricesDiscountsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPricesDiscountsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsPricesDiscountsRequest} Method that allows for extracting information about individual discounts assigned to customer accounts.
 */
export const getClientsPricesDiscountsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/prices/discounts' }
    return new Proxy(object, paramsProxy);
}