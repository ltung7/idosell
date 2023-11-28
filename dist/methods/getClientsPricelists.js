import { paramsProxy } from "../params.js";

/**
 * The get method allows you to download individual price lists available in the administration panel
 * @typedef {Object} GetClientsPricelistsRequest
 * @property {(priceListIds: Array<Integer>) => GetClientsPricelistsRequest} priceListIds List of individual price lists.
 * @property {(returnElements: Array<String>) => GetClientsPricelistsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsPricelistsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPricelistsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsPricelistsRequest} The get method allows you to download individual price lists available in the administration panel
 */
export const getClientsPricelistsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists' }
    return new Proxy(object, paramsProxy);
}