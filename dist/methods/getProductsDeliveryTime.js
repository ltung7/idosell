import { paramsProxy } from "../params.js";

/**
 * The method returns the time needed to prepare the product for shipment
 * @typedef {Object} GetProductsDeliveryTimeRequest
 * @property {(stockId: Integer) => GetProductsDeliveryTimeRequest} stockId Stock ID
 * @property {(isCollectionInPerson: Boolean) => GetProductsDeliveryTimeRequest} isCollectionInPerson Should products be prepared for personal collection?
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsDeliveryTimeRequest} The method returns the time needed to prepare the product for shipment
 */
export const getProductsDeliveryTimeProxy = (object) => {
    object.gate = { method: 'get', node: '/products/deliveryTime' }
    return new Proxy(object, paramsProxy);
}