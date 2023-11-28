import { paramsProxy } from "../params.js";

/**
 * addDiscountGroup - allows to add a new discount group in the administration panel. The discount group is added by default with the setting "Discount for products - yes, but different for indicated groups".
 * @typedef {Object} PostDiscountsGroupsRequest
 * @property {(discountGroupName: String) => PostDiscountsGroupsRequest} discountGroupName Discount group name
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostDiscountsGroupsRequest} addDiscountGroup - allows to add a new discount group in the administration panel. The discount group is added by default with the setting "Discount for products - yes, but different for indicated groups".
 */
export const postDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/groups' }
    return new Proxy(object, paramsProxy);
}