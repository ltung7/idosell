import { paramsProxy } from "../params.js";

/**
 * Method that enables adding and editing of sections and parameters, modifying their values and setting their order.
 * @typedef {Object} PutProductsParametersRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsParametersRequest} Method that enables adding and editing of sections and parameters, modifying their values and setting their order.
 */
export const putProductsParametersProxy = (object) => {
    object.gate = { method: 'put', node: '/products/parameters' }
    return new Proxy(object, paramsProxy);
}