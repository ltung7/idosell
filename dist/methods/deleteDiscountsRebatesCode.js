import { paramsProxy } from "../params.js";

/**
 * deleteUnusedRebateCodes method - allows to quickly delete all the discount codes, which have never been used by customers, from an indicated rebate campaign. Codes which have been used at least once, will not be deleted.
 * @typedef {Object} DeleteDiscountsRebatesCodeRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteDiscountsRebatesCodeRequest} deleteUnusedRebateCodes method - allows to quickly delete all the discount codes, which have never been used by customers, from an indicated rebate campaign. Codes which have been used at least once, will not be deleted.
 */
export const deleteDiscountsRebatesCodeProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/code/delete' }
    return new Proxy(object, paramsProxy);
}