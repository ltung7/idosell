import { paramsProxy } from "../params.js";

/**
 * getClientsAssignedToDiscountGroup - returns the list of customer IDs assigned to an indicated discount group. In order to assign a discount group, use setClients method in API Clients.
 * @typedef {Object} GetDiscountsGroupsClientsRequest
 * @property {(discountGroupId: Integer) => GetDiscountsGroupsClientsRequest} discountGroupId Discount group ID
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetDiscountsGroupsClientsRequest} getClientsAssignedToDiscountGroup - returns the list of customer IDs assigned to an indicated discount group. In order to assign a discount group, use setClients method in API Clients.
 */
export const getDiscountsGroupsClientsProxy = (object) => {
    object.gate = { method: 'get', node: '/discounts/groups/clients' }
    return new Proxy(object, paramsProxy);
}