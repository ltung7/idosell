import { paramsProxy } from "../params.js";

/**
 * deleteUnusedRebateCards method allows to quickly delete all the discount codes, which have never been used by customers, from an indicated rebate campaign. Codes which have been used at least once, will not be deleted.
 * @typedef {Object} DeleteDiscountsRebatesCardRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteDiscountsRebatesCardRequest} deleteUnusedRebateCards method allows to quickly delete all the discount codes, which have never been used by customers, from an indicated rebate campaign. Codes which have been used at least once, will not be deleted.
 */
export const deleteDiscountsRebatesCardProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/card/delete' }
    return new Proxy(object, paramsProxy);
}