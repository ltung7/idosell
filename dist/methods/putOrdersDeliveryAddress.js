import { paramsProxy } from "../params.js";

/**
 * Method that enables editing the delivery address details for an order in the administration panel.
 * @typedef {Object} PutOrdersDeliveryAddressRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersDeliveryAddressRequest} orderSerialNumber Order serial number.
 * @property {(clientDeliveryAddressId: Integer) => PutOrdersDeliveryAddressRequest} clientDeliveryAddressId Delivery address ID.
 * @property {(clientLogin: String) => PutOrdersDeliveryAddressRequest} clientLogin Customer's login.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersDeliveryAddressRequest} Method that enables editing the delivery address details for an order in the administration panel.
 */
export const putOrdersDeliveryAddressProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/deliveryAddress' }
    return new Proxy(object, paramsProxy);
}