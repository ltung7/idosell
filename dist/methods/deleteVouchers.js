import { paramsProxy } from "../params.js";

/**
 * Enables deleting a single or a list of gift vouchers
 * @typedef {Object} DeleteVouchersRequest
 * @property {(vouchers: Array<Object>) => DeleteVouchersRequest} vouchers 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteVouchersRequest} Enables deleting a single or a list of gift vouchers
 */
export const deleteVouchersProxy = (object) => {
    object.gate = { method: 'post', node: '/vouchers/vouchers/delete' }
    return new Proxy(object, paramsProxy);
}