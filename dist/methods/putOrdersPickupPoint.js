import { paramsProxy } from "../params.js";

/**
 * The method allows to change the collection point in the order.
 * @typedef {Object} PutOrdersPickupPointRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersPickupPointRequest} orderSerialNumber Order serial number.
 * @property {(pickupPointId: String) => PutOrdersPickupPointRequest} pickupPointId Collection point ID.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersPickupPointRequest} The method allows to change the collection point in the order.
 */
export const putOrdersPickupPointProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/pickupPoint' }
    return new Proxy(object, paramsProxy);
}