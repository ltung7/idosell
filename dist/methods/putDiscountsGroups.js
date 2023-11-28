import { paramsProxy } from "../params.js";

/**
 * editDiscountGroup - allows to change a discount group name
 * @typedef {Object} PutDiscountsGroupsRequest
 * @property {(discountGroupId: Integer) => PutDiscountsGroupsRequest} discountGroupId Discount group ID
 * @property {(discountGroupName: String) => PutDiscountsGroupsRequest} discountGroupName Discount group name
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutDiscountsGroupsRequest} editDiscountGroup - allows to change a discount group name
 */
export const putDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/groups' }
    return new Proxy(object, paramsProxy);
}