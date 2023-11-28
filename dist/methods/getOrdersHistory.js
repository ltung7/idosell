import { paramsProxy } from "../params.js";

/**
 * Method allows to retrieve orders history from the IdoSell Shop panel
 * @typedef {Object} GetOrdersHistoryRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersHistoryRequest} orderSerialNumber Order serial number.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersHistoryRequest} Method allows to retrieve orders history from the IdoSell Shop panel
 */
export const getOrdersHistoryProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/history' }
    return new Proxy(object, paramsProxy);
}