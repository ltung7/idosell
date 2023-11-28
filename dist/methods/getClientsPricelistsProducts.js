import { paramsProxy } from "../params.js";

/**
 * The getProducts method enables the retrieval of products from an individual price list together with the price
 * @typedef {Object} GetClientsPricelistsProductsRequest
 * @property {(priceListId: Integer) => GetClientsPricelistsProductsRequest} priceListId Individual price list ID.
 * @property {(resultsPage: Integer) => GetClientsPricelistsProductsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPricelistsProductsRequest} resultsLimit Number of results per page. Value from 1 to 500.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsPricelistsProductsRequest} The getProducts method enables the retrieval of products from an individual price list together with the price
 */
export const getClientsPricelistsProductsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/pricelists/products' }
    return new Proxy(object, paramsProxy);
}