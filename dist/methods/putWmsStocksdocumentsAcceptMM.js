import { paramsProxy } from "../params.js";

/**
 * The method enables the MM document to be received at the target warehouse.
 * @typedef {Object} PutWmsStocksdocumentsAcceptMMRequest
 * @property {(id: Integer) => PutWmsStocksdocumentsAcceptMMRequest} id Document identifier.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutWmsStocksdocumentsAcceptMMRequest} The method enables the MM document to be received at the target warehouse.
 */
export const putWmsStocksdocumentsAcceptMMProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/acceptMM' }
    return new Proxy(object, paramsProxy);
}