import { paramsProxy } from "../params.js";

/**
 * Method that enables getting information about which warehouse an order is being handled from.
 * @typedef {Object} GetOrdersWarehouseRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersWarehouseRequest} orderSerialNumber Order serial number.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersWarehouseRequest} Method that enables getting information about which warehouse an order is being handled from.
 */
export const getOrdersWarehouseProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/warehouse' }
    return new Proxy(object, paramsProxy);
}