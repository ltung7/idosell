import { paramsProxy } from "../params.js";

/**
 * addRebateCard method - allows to upload new card numbers to already existing discount card types in the administration panel. Cards uploaded such way retrieve settings, regarding the discount amount, from the type of cards to which they are uploaded. Every card can also have individual, independent discount settings which can be set in the administration panel..
 * @typedef {Object} PostDiscountsRebatesCardRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostDiscountsRebatesCardRequest} addRebateCard method - allows to upload new card numbers to already existing discount card types in the administration panel. Cards uploaded such way retrieve settings, regarding the discount amount, from the type of cards to which they are uploaded. Every card can also have individual, independent discount settings which can be set in the administration panel..
 */
export const postDiscountsRebatesCardProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/card' }
    return new Proxy(object, paramsProxy);
}