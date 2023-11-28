import { paramsProxy } from "../params.js";

/**
 * Method that enabled assigning a handler to an order.
 * @typedef {Object} PutOrdersHandlerRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersHandlerRequest} orderSerialNumber Order serial number.
 * @property {(orderOperatorLogin: String) => PutOrdersHandlerRequest} orderOperatorLogin Order handler.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersHandlerRequest} Method that enabled assigning a handler to an order.
 */
export const putOrdersHandlerProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/handler' }
    return new Proxy(object, paramsProxy);
}