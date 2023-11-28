import { paramsProxy } from "../params.js";

/**
 * setProductsQuantityInCollection method allows to indicate quantity of a collection component
 * @typedef {Object} PutProductsCollectionsProductsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsCollectionsProductsRequest} setProductsQuantityInCollection method allows to indicate quantity of a collection component
 */
export const putProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/collections/products' }
    return new Proxy(object, paramsProxy);
}