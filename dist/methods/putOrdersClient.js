import { paramsProxy } from "../params.js";

/**
 * Array
 * @typedef {Object} PutOrdersClientRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersClientRequest} orderSerialNumber Order serial number.
 * @property {(clientId: Integer) => PutOrdersClientRequest} clientId Unique client's number.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersClientRequest} Array
 */
export const putOrdersClientProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/client' }
    return new Proxy(object, paramsProxy);
}