import { paramsProxy } from "../params.js";

/**
 * Method that enables getting information about the handler currently assigned to an order.
 * @typedef {Object} GetOrdersHandlerRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersHandlerRequest} orderSerialNumber Order serial number.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersHandlerRequest} Method that enables getting information about the handler currently assigned to an order.
 */
export const getOrdersHandlerProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/handler' }
    return new Proxy(object, paramsProxy);
}