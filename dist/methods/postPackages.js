import { paramsProxy } from "../params.js";

/**
 * Method that enables adding parcels to an order.
 * @typedef {Object} PostPackagesRequest
 * @property {(orderPackages: Array<Object>) => PostPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostPackagesRequest} Method that enables adding parcels to an order.
 */
export const postPackagesProxy = (object) => {
    object.gate = { method: 'post', node: '/packages/packages' }
    return new Proxy(object, paramsProxy);
}