import { paramsProxy } from "../params.js";

/**
 * The method allows you to update brands information available in the administration panel..
 * @typedef {Object} PostProductsBrandsRequest
 * @property {(producers: Array<Object>) => PostProductsBrandsRequest} producers List of manufacturers assigned to sought products.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsBrandsRequest} The method allows you to update brands information available in the administration panel..
 */
export const postProductsBrandsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/brands' }
    return new Proxy(object, paramsProxy);
}