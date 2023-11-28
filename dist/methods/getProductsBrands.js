import { paramsProxy } from "../params.js";

/**
 * Method that returns information about brands available in the IdoSell Shop administration panel.
 * @typedef {Object} GetProductsBrandsRequest
 * @property {(results_page: Integer) => GetProductsBrandsRequest} results_page Result page number.
 * @property {(results_limit: Integer) => GetProductsBrandsRequest} results_limit Number of results on page.
 * @property {(languagesIds: Array<String>) => GetProductsBrandsRequest} languagesIds List of languages
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsBrandsRequest} Method that returns information about brands available in the IdoSell Shop administration panel.
 */
export const getProductsBrandsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/brands' }
    return new Proxy(object, paramsProxy);
}