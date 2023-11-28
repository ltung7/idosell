import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about discount groups configured in the administration panel.
 * @typedef {Object} GetClientsPricesDiscountGroupsRequest
 * @property {(clientDiscountGroupsNumbers: Array<Integer>) => GetClientsPricesDiscountGroupsRequest} clientDiscountGroupsNumbers Customer groups.
 * @property {(returnElements: Array<String>) => GetClientsPricesDiscountGroupsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsPricesDiscountGroupsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPricesDiscountGroupsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsPricesDiscountGroupsRequest} Method that enables extracting information about discount groups configured in the administration panel.
 */
export const getClientsPricesDiscountGroupsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/prices/discountGroups' }
    return new Proxy(object, paramsProxy);
}