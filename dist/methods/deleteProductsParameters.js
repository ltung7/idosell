import { paramsProxy } from "../params.js";

/**
 * The method allows you to delete parameters and their values (for parameters that are not pinned to any product)..
 * @typedef {Object} DeleteProductsParametersRequest
 * @property {(ids: Array<Integer>) => DeleteProductsParametersRequest} ids Parameter identifiers
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsParametersRequest} The method allows you to delete parameters and their values (for parameters that are not pinned to any product)..
 */
export const deleteProductsParametersProxy = (object) => {
    object.gate = { method: 'post', node: '/products/parameters/delete' }
    return new Proxy(object, paramsProxy);
}