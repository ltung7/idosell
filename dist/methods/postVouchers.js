import { paramsProxy } from "../params.js";

/**
 * Enables adding new gift vouchers with the selected voucher type
 * @typedef {Object} PostVouchersRequest
 * @property {(vouchers: Array<Object>) => PostVouchersRequest} vouchers List of vouchers to add
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostVouchersRequest} Enables adding new gift vouchers with the selected voucher type
 */
export const postVouchersProxy = (object) => {
    object.gate = { method: 'post', node: '/vouchers/vouchers' }
    return new Proxy(object, paramsProxy);
}