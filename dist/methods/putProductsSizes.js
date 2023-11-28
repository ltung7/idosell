import { paramsProxy } from "../params.js";

/**
 * This method allows you to edit the size-dependent data
 * @typedef {Object} PutProductsSizesRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsSizesRequest} This method allows you to edit the size-dependent data
 */
export const putProductsSizesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/sizes' }
    return new Proxy(object, paramsProxy);
}