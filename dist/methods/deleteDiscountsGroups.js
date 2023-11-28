import { paramsProxy } from "../params.js";

/**
 * deleteDiscountGroup - allows to remove a discount group. The condition for conducting this process is no customers assigned to the indicated group. In order to check the assigned customers use getClientsAssignedToDiscountGroup method. 
 * @typedef {Object} DeleteDiscountsGroupsRequest
 * @property {(discountGroupId: Integer) => DeleteDiscountsGroupsRequest} discountGroupId Discount group ID
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteDiscountsGroupsRequest} deleteDiscountGroup - allows to remove a discount group. The condition for conducting this process is no customers assigned to the indicated group. In order to check the assigned customers use getClientsAssignedToDiscountGroup method. 
 */
export const deleteDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/groups/delete' }
    return new Proxy(object, paramsProxy);
}