import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about documents issued for orders in the administration panel.
 * @typedef {Object} GetOrdersDocumentsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersDocumentsRequest} Method that enables extracting information about documents issued for orders in the administration panel.
 */
export const getOrdersDocumentsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/documents' }
    return new Proxy(object, paramsProxy);
}