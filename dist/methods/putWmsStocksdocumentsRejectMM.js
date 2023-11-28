import { paramsProxy } from "../params.js";

/**
 * The method allows to withdraw the MM document to the source warehouse.
 * @typedef {Object} PutWmsStocksdocumentsRejectMMRequest
 * @property {(id: Integer) => PutWmsStocksdocumentsRejectMMRequest} id Document identifier.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutWmsStocksdocumentsRejectMMRequest} The method allows to withdraw the MM document to the source warehouse.
 */
export const putWmsStocksdocumentsRejectMMProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/rejectMM' }
    return new Proxy(object, paramsProxy);
}