import { paramsProxy } from "../params.js";

/**
 * Method returns information about IdoSell Categories available in store. .
 * @typedef {Object} GetProductsCategoriesIdosellRequest
 * @property {(languagesIds: Array<Object>) => GetProductsCategoriesIdosellRequest} languagesIds List of languages
 * @property {(categoriesIdoSellIds: Array<String>) => GetProductsCategoriesIdosellRequest} categoriesIdoSellIds Number of IdoSell Categories identifiers
 * @property {(categoriesIdoSellNames: Array<String>) => GetProductsCategoriesIdosellRequest} categoriesIdoSellNames IdoSell Categories name list
 * @property {(categoriesIdoSellPaths: Array<String>) => GetProductsCategoriesIdosellRequest} categoriesIdoSellPaths IdoSell Categories path list
 * @property {(resultsPage: Integer) => GetProductsCategoriesIdosellRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsCategoriesIdosellRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsCategoriesIdosellRequest} Method returns information about IdoSell Categories available in store. .
 */
export const getProductsCategoriesIdosellProxy = (object) => {
    object.gate = { method: 'get', node: '/products/categoriesIdosell' }
    return new Proxy(object, paramsProxy);
}