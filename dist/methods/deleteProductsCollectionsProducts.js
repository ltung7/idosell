import { paramsProxy } from "../params.js";

/**
 * removeProductsFromCollection method allows to remove indicated collection components
 * @typedef {Object} DeleteProductsCollectionsProductsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsCollectionsProductsRequest} removeProductsFromCollection method allows to remove indicated collection components
 */
export const deleteProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections/products/delete' }
    return new Proxy(object, paramsProxy);
}