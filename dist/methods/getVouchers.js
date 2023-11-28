import { paramsProxy } from "../params.js";

/**
 * Enables searching for vouchers and retrieving information about indicated vouchers
 * @typedef {Object} GetVouchersRequest
 * @property {(vouchers: Array<Object>) => GetVouchersRequest} vouchers 
 * @property {(voucherTypeId: Integer) => GetVouchersRequest} voucherTypeId Discount code campaign ID
 * @property {(name: String) => GetVouchersRequest} name Name.
 * @property {(status: String) => GetVouchersRequest} status Status
 * @property {(generetedFromAffiliateProgram: String) => GetVouchersRequest} generetedFromAffiliateProgram Generated in the affiliate program
 * @property {(noteContain: String) => GetVouchersRequest} noteContain Notes contain
 * @property {(balanceFrom: Number) => GetVouchersRequest} balanceFrom Value from
 * @property {(balanceTo: Number) => GetVouchersRequest} balanceTo Value to
 * @property {(expirationDateFrom: String) => GetVouchersRequest} expirationDateFrom Expiration date from
 * @property {(expirationDateTo: String) => GetVouchersRequest} expirationDateTo Expiration date to
 * @property {(issueDateFrom: String) => GetVouchersRequest} issueDateFrom Created from
 * @property {(issueDateTo: String) => GetVouchersRequest} issueDateTo Created to
 * @property {(usageDateFrom: String) => GetVouchersRequest} usageDateFrom To be used from
 * @property {(usageDateTo: String) => GetVouchersRequest} usageDateTo To be used to
 * @property {(resultsPage: Integer) => GetVouchersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetVouchersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetVouchersRequest} Enables searching for vouchers and retrieving information about indicated vouchers
 */
export const getVouchersProxy = (object) => {
    object.gate = { method: 'get', node: '/vouchers/vouchers' }
    return new Proxy(object, paramsProxy);
}