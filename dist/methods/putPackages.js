import { paramsProxy } from "../params.js";

/**
 * Method that enables editing parcels already assigned to an order.
 * @typedef {Object} PutPackagesRequest
 * @property {(orderPackages: Array<Object>) => PutPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutPackagesRequest} Method that enables editing parcels already assigned to an order.
 */
export const putPackagesProxy = (object) => {
    object.gate = { method: 'put', node: '/packages/packages' }
    return new Proxy(object, paramsProxy);
}