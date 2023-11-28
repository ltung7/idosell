import { paramsProxy } from "../params.js";

/**
 * Method that returns text elements for a given product, e.g. product name, long and short description, metadata.
 * @typedef {Object} GetProductsDescriptionsRequest
 * @property {(productsIdents: Array<Object>) => GetProductsDescriptionsRequest} productsIdents Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsDescriptionsRequest} Method that returns text elements for a given product, e.g. product name, long and short description, metadata.
 */
export const getProductsDescriptionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/descriptions' }
    return new Proxy(object, paramsProxy);
}