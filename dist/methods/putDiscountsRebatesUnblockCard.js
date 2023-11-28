import { paramsProxy } from "../params.js";

/**
 * unblockRebateCard method - allows to unblock discount cards. Block cards with the blockRebateCard method.
 * @typedef {Object} PutDiscountsRebatesUnblockCardRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutDiscountsRebatesUnblockCardRequest} unblockRebateCard method - allows to unblock discount cards. Block cards with the blockRebateCard method.
 */
export const putDiscountsRebatesUnblockCardProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/rebates/unblockCard' }
    return new Proxy(object, paramsProxy);
}