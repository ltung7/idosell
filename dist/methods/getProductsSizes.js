import { paramsProxy } from "../params.js";

/**
 * Method that returns information about product sizes configured in the administration panel
 * @typedef {Object} GetProductsSizesRequest
 * @property {(result::page: Integer) => GetProductsSizesRequest} result::page Page with results number. Numeration starts from 0
 * @property {(result::pageNumber: Integer) => GetProductsSizesRequest} result::pageNumber Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsSizesRequest} Method that returns information about product sizes configured in the administration panel
 */
export const getProductsSizesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/sizes' }
    return new Proxy(object, paramsProxy);
}