import { paramsProxy } from "../params.js";

/**
 * The method allows you to update brands information available in the administration panel..
 * @typedef {Object} PutProductsBrandsRequest
 * @property {(producers: Array<Object>) => PutProductsBrandsRequest} producers List of manufacturers assigned to sought products.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsBrandsRequest} The method allows you to update brands information available in the administration panel..
 */
export const putProductsBrandsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/brands' }
    return new Proxy(object, paramsProxy);
}