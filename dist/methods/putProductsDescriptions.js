import { paramsProxy } from "../params.js";

/**
 * The method allows for setting text elements for a given product, e.g. product name, long and short description, metadata.
 * @typedef {Object} PutProductsDescriptionsRequest
 * @property {(products: Array<Object>) => PutProductsDescriptionsRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsDescriptionsRequest} The method allows for setting text elements for a given product, e.g. product name, long and short description, metadata.
 */
export const putProductsDescriptionsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/descriptions' }
    return new Proxy(object, paramsProxy);
}