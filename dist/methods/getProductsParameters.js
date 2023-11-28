import { paramsProxy } from "../params.js";

/**
 * Method that enables adding and editing of sections and parameters, modifying their values and setting their order.
 * @typedef {Object} GetProductsParametersRequest
 * @property {(ids: Array<Integer>) => GetProductsParametersRequest} ids List of identifiers
 * @property {(textIds: Array<Object>) => GetProductsParametersRequest} textIds Element text ID - can be entered instead of "id".
 * @property {(languagesIds: Array<String>) => GetProductsParametersRequest} languagesIds List of languages
 * @property {(resultsPage: Integer) => GetProductsParametersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsParametersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsParametersRequest} Method that enables adding and editing of sections and parameters, modifying their values and setting their order.
 */
export const getProductsParametersProxy = (object) => {
    object.gate = { method: 'get', node: '/products/parameters' }
    return new Proxy(object, paramsProxy);
}