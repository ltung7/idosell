import { paramsProxy } from "../params.js";

/**
 * Method that enables editing parcels already assigned to an order.
 * @typedef {Object} PutOrdersPackagesRequest
 * @property {(orderPackages: Array<Object>) => PutOrdersPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutOrdersPackagesRequest} Method that enables editing parcels already assigned to an order.
 */
export const putOrdersPackagesProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/packages' }
    return new Proxy(object, paramsProxy);
}