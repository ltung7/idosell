import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about non-deleted products available in the administration panel
 * @typedef {Object} GetProductsRequest
 * @property {(productIds: Array<String>) => GetProductsRequest} productIds List of the unique, indexed product codes (IAI code / External system code / Producer code)
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsRequest} Method that enables extracting information about non-deleted products available in the administration panel
 */
export const getProductsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/products' }
    return new Proxy(object, paramsProxy);
}