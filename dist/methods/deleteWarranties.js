import { paramsProxy } from "../params.js";

/**
 * Method that enables deleting product warranties from the administration panel.
 * @typedef {Object} DeleteWarrantiesRequest
 * @property {(warranty_ids: Array<String>) => DeleteWarrantiesRequest} warranty_ids 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteWarrantiesRequest} Method that enables deleting product warranties from the administration panel.
 */
export const deleteWarrantiesProxy = (object) => {
    object.gate = { method: 'post', node: '/warranties/warranties/delete' }
    return new Proxy(object, paramsProxy);
}