import { paramsProxy } from "../params.js";

/**
 * Method returns information about the product series available in the IdoSell administration panel..
 * @typedef {Object} GetProductsSeriesRequest
 * @property {(return_last_changed_time: String) => GetProductsSeriesRequest} return_last_changed_time With "y" value it returns the last series modification date in YYYY-MM-DD HH:MM:SS format.
 * @property {(ids: Array<Integer>) => GetProductsSeriesRequest} ids IDs
 * @property {(names: Array<String>) => GetProductsSeriesRequest} names Names
 * @property {(languagesIds: Array<String>) => GetProductsSeriesRequest} languagesIds List of languages
 * @property {(resultsPage: Integer) => GetProductsSeriesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsSeriesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsSeriesRequest} Method returns information about the product series available in the IdoSell administration panel..
 */
export const getProductsSeriesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/series' }
    return new Proxy(object, paramsProxy);
}