import { paramsProxy } from "../params.js";

/**
 * Method that enables getting a list of product warranties available in the administration panel.
 * @typedef {Object} GetWarrantiesRequest
 * @property {(warranty_ids: Array<String>) => GetWarrantiesRequest} warranty_ids 
 * @property {(results_limit: Integer) => GetWarrantiesRequest} results_limit Number of results on page.
 * @property {(results_page: Integer) => GetWarrantiesRequest} results_page Result page number.
 * @property {(results_order: Object) => GetWarrantiesRequest} results_order 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetWarrantiesRequest} Method that enables getting a list of product warranties available in the administration panel.
 */
export const getWarrantiesProxy = (object) => {
    object.gate = { method: 'get', node: '/warranties/warranties' }
    return new Proxy(object, paramsProxy);
}