import { paramsProxy } from "../params.js";

/**
 * Method that enables changing the courier handling the shipment for an order.
 * @typedef {Object} PutOrdersCourierRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersCourierRequest} orderSerialNumber Order serial number.
 * @property {(courierId: Integer) => PutOrdersCourierRequest} courierId Courier ID.
 * @property {(pickupPointId: String) => PutOrdersCourierRequest} pickupPointId Collection point ID.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersCourierRequest} Method that enables changing the courier handling the shipment for an order.
 */
export const putOrdersCourierProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/courier' }
    return new Proxy(object, paramsProxy);
}