import { paramsProxy } from "../params.js";

/**
 * The method allows for downloading information about reviews issued for products available in the IdoSell Shop administration panel.
 * @typedef {Object} GetProductsOpinionsOpinionsRequest
 * @property {(opinion: Object) => GetProductsOpinionsOpinionsRequest} opinion Review identification
 * @property {(products: Object) => GetProductsOpinionsOpinionsRequest} products Products list.
 * @property {(clients: Object) => GetProductsOpinionsOpinionsRequest} clients Customer data.
 * @property {(dateRange: Object) => GetProductsOpinionsOpinionsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetProductsOpinionsOpinionsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsOpinionsOpinionsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(ordersBy: Array<Object>) => GetProductsOpinionsOpinionsRequest} ordersBy Possibility of sorting returned list
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsOpinionsOpinionsRequest} The method allows for downloading information about reviews issued for products available in the IdoSell Shop administration panel.
 */
export const getProductsOpinionsOpinionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}