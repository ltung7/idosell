import { paramsProxy } from "../params.js";

/**
 * Enables gift voucer blocking
 * @typedef {Object} PutVouchersBlockRequest
 * @property {(vouchers: Array<Object>) => PutVouchersBlockRequest} vouchers 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutVouchersBlockRequest} Enables gift voucer blocking
 */
export const putVouchersBlockProxy = (object) => {
    object.gate = { method: 'put', node: '/vouchers/block' }
    return new Proxy(object, paramsProxy);
}