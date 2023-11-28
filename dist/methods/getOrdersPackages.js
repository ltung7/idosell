import { paramsProxy } from "../params.js";

/**
 * Method that enables getting a list of parcels assigned to an order.
 * @typedef {Object} GetOrdersPackagesRequest
 * @property {(deliveryPackageNumbers: Array<String>) => GetOrdersPackagesRequest} deliveryPackageNumbers Consignments numbers.
 * @property {(events: Array<Object>) => GetOrdersPackagesRequest} events Element, package is assigned to
 * @property {(returnLabels: Boolean) => GetOrdersPackagesRequest} returnLabels Return parcel labels.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersPackagesRequest} Method that enables getting a list of parcels assigned to an order.
 */
export const getOrdersPackagesProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/packages' }
    return new Proxy(object, paramsProxy);
}