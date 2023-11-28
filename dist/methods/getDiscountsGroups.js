import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about discount groups configured in the administration panel.
 * @typedef {Object} GetDiscountsGroupsRequest
 * @property {(group_numbers: Array<Integer>) => GetDiscountsGroupsRequest} group_numbers 
 * @property {(return_elements: Array<String>) => GetDiscountsGroupsRequest} return_elements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(results_page: Integer) => GetDiscountsGroupsRequest} results_page Results page number. Numbering begins at 0. Default value: 0.
 * @property {(results_limit: Integer) => GetDiscountsGroupsRequest} results_limit Maximum number of results on a single page. Default is 100.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetDiscountsGroupsRequest} Method that enables extracting information about discount groups configured in the administration panel.
 */
export const getDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'get', node: '/discounts/groups' }
    return new Proxy(object, paramsProxy);
}