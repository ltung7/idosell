import { paramsProxy } from "../params.js";

/**
 * addProductsToBundle method allows to add components to existing sets in the administration panel
 * @typedef {Object} PostProductsBundlesProductsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsBundlesProductsRequest} addProductsToBundle method allows to add components to existing sets in the administration panel
 */
export const postProductsBundlesProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/products' }
    return new Proxy(object, paramsProxy);
}