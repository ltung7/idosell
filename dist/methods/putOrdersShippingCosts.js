import { paramsProxy } from "../params.js";

/**
 * Method that enables editing the delivery costs for an order in the administration panel.
 * @typedef {Object} PutOrdersShippingCostsRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersShippingCostsRequest} orderSerialNumber Order serial number.
 * @property {(deliveryCost: Number) => PutOrdersShippingCostsRequest} deliveryCost Delivery cost.
 * @property {(orderDeliveryVat: Number) => PutOrdersShippingCostsRequest} orderDeliveryVat Delivery VAT.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersShippingCostsRequest} Method that enables editing the delivery costs for an order in the administration panel.
 */
export const putOrdersShippingCostsProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/shippingCosts' }
    return new Proxy(object, paramsProxy);
}