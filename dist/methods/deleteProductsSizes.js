import { paramsProxy } from "../params.js";

/**
 * The method is used to remove sizes
 * @typedef {Object} DeleteProductsSizesRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsSizesRequest} The method is used to remove sizes
 */
export const deleteProductsSizesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/sizes/delete' }
    return new Proxy(object, paramsProxy);
}