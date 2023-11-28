import { paramsProxy } from "../params.js";

/**
 * blockRebateCard method - allows to block an indicated discount card, eg. when it is assumed that its number has been made available publicly. The blocked card can be unblocked with the method unblockRebateCard.
 * @typedef {Object} PutDiscountsRebatesBlockCardRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutDiscountsRebatesBlockCardRequest} blockRebateCard method - allows to block an indicated discount card, eg. when it is assumed that its number has been made available publicly. The blocked card can be unblocked with the method unblockRebateCard.
 */
export const putDiscountsRebatesBlockCardProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/rebates/blockCard' }
    return new Proxy(object, paramsProxy);
}