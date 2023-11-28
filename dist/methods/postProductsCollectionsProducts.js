import { paramsProxy } from "../params.js";

/**
 * addProductsToCollection method allows to add components to existing collections in the administration panel
 * @typedef {Object} PostProductsCollectionsProductsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsCollectionsProductsRequest} addProductsToCollection method allows to add components to existing collections in the administration panel
 */
export const postProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections/products' }
    return new Proxy(object, paramsProxy);
}