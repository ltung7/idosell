import { paramsProxy } from "../params.js";

/**
 * The method is used to retrieve information about the margins of the goods of the order.
 * @typedef {Object} GetOrdersAnalyticsRequest
 * @property {(orders: Array<Object>) => GetOrdersAnalyticsRequest} orders Orders.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersAnalyticsRequest} The method is used to retrieve information about the margins of the goods of the order.
 */
export const getOrdersAnalyticsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/analytics' }
    return new Proxy(object, paramsProxy);
}