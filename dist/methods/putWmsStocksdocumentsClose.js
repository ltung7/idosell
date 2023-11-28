import { paramsProxy } from "../params.js";

/**
 * Method that enables closing warehouse documents.
 * @typedef {Object} PutWmsStocksdocumentsCloseRequest
 * @property {(type: String) => PutWmsStocksdocumentsCloseRequest} type 
 * @property {(id: Integer) => PutWmsStocksdocumentsCloseRequest} id Document identifier.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutWmsStocksdocumentsCloseRequest} Method that enables closing warehouse documents.
 */
export const putWmsStocksdocumentsCloseProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/close' }
    return new Proxy(object, paramsProxy);
}