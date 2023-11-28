import { paramsProxy } from "../params.js";

/**
 * Method that enables editing product warranties available in the administration panel.
 * @typedef {Object} PutWarrantiesRequest
 * @property {(warranties: Array<Object>) => PutWarrantiesRequest} warranties 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutWarrantiesRequest} Method that enables editing product warranties available in the administration panel.
 */
export const putWarrantiesProxy = (object) => {
    object.gate = { method: 'put', node: '/warranties/warranties' }
    return new Proxy(object, paramsProxy);
}