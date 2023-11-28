import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 * @typedef {Object} GetOrdersRequest
 * @property {(ordersIds: Array<String>) => GetOrdersRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => GetOrdersRequest} ordersSerialNumbers Order serial numbers.
 * @property {(orderExternalId: String) => GetOrdersRequest} orderExternalId The order ID of the external service
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersRequest} Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 */
export const getOrdersProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/orders' }
    return new Proxy(object, paramsProxy);
}