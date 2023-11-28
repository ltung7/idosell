import { paramsProxy } from "../params.js";

/**
 * Method that returns information about categories configured in the administration panel.
 * @typedef {Object} GetProductsCategoriesRequest
 * @property {(ids: Array<Integer>) => GetProductsCategoriesRequest} ids List of product category identifiers in the panel
 * @property {(languages: Array<String>) => GetProductsCategoriesRequest} languages Array of languages categories names should be returned in. "Defaults" value returns categories names in store default language. Not using languages parameter causes a situation, that categories names are returned in all available languages.
 * @property {(results_page: Integer) => GetProductsCategoriesRequest} results_page Result page number.
 * @property {(results_limit: Integer) => GetProductsCategoriesRequest} results_limit Number of results on page.
 * @property {(return_last_changed_time: String) => GetProductsCategoriesRequest} return_last_changed_time Returns the date of last modification (YYYY-MM-DD HH-MM-SS).
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsCategoriesRequest} Method that returns information about categories configured in the administration panel.
 */
export const getProductsCategoriesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/categories' }
    return new Proxy(object, paramsProxy);
}