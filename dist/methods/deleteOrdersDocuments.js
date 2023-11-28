import { paramsProxy } from "../params.js";

/**
 * The method allows to delete documents added to the order in the IdoSell administration panel.
 * @typedef {Object} DeleteOrdersDocumentsRequest
 * @property {(documents: Array<Object>) => DeleteOrdersDocumentsRequest} documents List of documents.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteOrdersDocumentsRequest} The method allows to delete documents added to the order in the IdoSell administration panel.
 */
export const deleteOrdersDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/documents/delete' }
    return new Proxy(object, paramsProxy);
}