import { paramsProxy } from "../params.js";

/**
 * Method that enables deleting open warehouse documents.
 * @typedef {Object} DeleteWmsStocksdocumentsDocumentsRequest
 * @property {(type: String) => DeleteWmsStocksdocumentsDocumentsRequest} type 
 * @property {(id: Integer) => DeleteWmsStocksdocumentsDocumentsRequest} id Document identifier.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteWmsStocksdocumentsDocumentsRequest} Method that enables deleting open warehouse documents.
 */
export const deleteWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/documents/delete' }
    return new Proxy(object, paramsProxy);
}