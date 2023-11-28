import { paramsProxy } from "../params.js";

/**
 * Enables gift vouchers unblocking
 * @typedef {Object} PutVouchersUnblockRequest
 * @property {(vouchers: Array<Object>) => PutVouchersUnblockRequest} vouchers 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutVouchersUnblockRequest} Enables gift vouchers unblocking
 */
export const putVouchersUnblockProxy = (object) => {
    object.gate = { method: 'put', node: '/vouchers/unblock' }
    return new Proxy(object, paramsProxy);
}