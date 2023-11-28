import { paramsProxy } from "../params.js";

/**
 * removeProductsFromBundle method allows to remove indicated set components
 * @typedef {Object} DeleteProductsBundlesProductsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsBundlesProductsRequest} removeProductsFromBundle method allows to remove indicated set components
 */
export const deleteProductsBundlesProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/products/delete' }
    return new Proxy(object, paramsProxy);
}