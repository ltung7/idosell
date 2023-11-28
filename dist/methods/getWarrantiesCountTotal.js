import { paramsProxy } from "../params.js";

/**
 * Method that enables getting the number of product guarantees available in the administration panel.
 * @typedef {Object} GetWarrantiesCountTotalRequest
 * @property {(warranty_ids: Array<String>) => GetWarrantiesCountTotalRequest} warranty_ids 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetWarrantiesCountTotalRequest} Method that enables getting the number of product guarantees available in the administration panel.
 */
export const getWarrantiesCountTotalProxy = (object) => {
    object.gate = { method: 'get', node: '/warranties/countTotal' }
    return new Proxy(object, paramsProxy);
}