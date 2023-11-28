import { paramsProxy } from "../params.js";

/**
 * The method is used to generate parcels and printouts for a courier.
 * @typedef {Object} GetOrdersLabelsRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersLabelsRequest} orderSerialNumber Order serial number.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersLabelsRequest} The method is used to generate parcels and printouts for a courier.
 */
export const getOrdersLabelsProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/labels' }
    return new Proxy(object, paramsProxy);
}