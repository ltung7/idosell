import { paramsProxy } from "../params.js";

/**
 * Method that enables editing parcels already assigned to an order.
 * @typedef {Object} PostOrdersPackagesRequest
 * @property {(orderPackages: Array<Object>) => PostOrdersPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostOrdersPackagesRequest} Method that enables editing parcels already assigned to an order.
 */
export const postOrdersPackagesProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/packages' }
    return new Proxy(object, paramsProxy);
}