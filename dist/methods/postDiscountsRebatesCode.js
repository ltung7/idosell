import { paramsProxy } from "../params.js";

/**
 * addRebateCode method - allows to upload new code numbers to already existing rebate campaigns in the administration panel. The codes uploaded in such way retrieve settings, regarding the discount amount, from a campaign to which they are uploaded. Each discount code can also have individual, independent discount settings which can be set in the administration panel.
 * @typedef {Object} PostDiscountsRebatesCodeRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostDiscountsRebatesCodeRequest} addRebateCode method - allows to upload new code numbers to already existing rebate campaigns in the administration panel. The codes uploaded in such way retrieve settings, regarding the discount amount, from a campaign to which they are uploaded. Each discount code can also have individual, independent discount settings which can be set in the administration panel.
 */
export const postDiscountsRebatesCodeProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/code' }
    return new Proxy(object, paramsProxy);
}