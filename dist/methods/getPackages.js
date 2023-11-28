import { paramsProxy } from "../params.js";

/**
 * Method that enables getting a list of parcels assigned to an order.
 * @typedef {Object} GetPackagesRequest
 * @property {(deliveryPackageNumbers: Array<String>) => GetPackagesRequest} deliveryPackageNumbers Consignments numbers.
 * @property {(events: Array<Object>) => GetPackagesRequest} events Element, package is assigned to
 * @property {(returnLabels: Boolean) => GetPackagesRequest} returnLabels Return parcel labels.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetPackagesRequest} Method that enables getting a list of parcels assigned to an order.
 */
export const getPackagesProxy = (object) => {
    object.gate = { method: 'get', node: '/packages/packages' }
    return new Proxy(object, paramsProxy);
}