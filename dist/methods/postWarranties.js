import { paramsProxy } from "../params.js";

/**
 * Method that enables adding product warranties to the administration panel.
 * @typedef {Object} PostWarrantiesRequest
 * @property {(warranties: Array<Object>) => PostWarrantiesRequest} warranties 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostWarrantiesRequest} Method that enables adding product warranties to the administration panel.
 */
export const postWarrantiesProxy = (object) => {
    object.gate = { method: 'post', node: '/warranties/warranties' }
    return new Proxy(object, paramsProxy);
}