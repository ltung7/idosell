import { paramsProxy } from "../params.js";

/**
 * Enables editing gift voucher, e.g. changing its balance, validity date or number (only for unused vouchers)
 * @typedef {Object} PutVouchersRequest
 * @property {(vouchers: Array<Object>) => PutVouchersRequest} vouchers List of vouchers to edit
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutVouchersRequest} Enables editing gift voucher, e.g. changing its balance, validity date or number (only for unused vouchers)
 */
export const putVouchersProxy = (object) => {
    object.gate = { method: 'put', node: '/vouchers/vouchers' }
    return new Proxy(object, paramsProxy);
}