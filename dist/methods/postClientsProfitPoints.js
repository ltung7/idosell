import { paramsProxy } from "../params.js";

/**
 * Method that allows for adding loyalty points to the balances of existing customer accounts.
 * @typedef {Object} PostClientsProfitPointsRequest
 * @property {(client_id: Integer) => PostClientsProfitPointsRequest} client_id 
 * @property {(operation: String) => PostClientsProfitPointsRequest} operation Operation: - add, - remove.
 * @property {(score: Number) => PostClientsProfitPointsRequest} score Amount of points to add or subtract.
 * @property {(note: String) => PostClientsProfitPointsRequest} note 
 * @property {(order_number: Integer) => PostClientsProfitPointsRequest} order_number Prepayment ID.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostClientsProfitPointsRequest} Method that allows for adding loyalty points to the balances of existing customer accounts.
 */
export const postClientsProfitPointsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/profitPoints' }
    return new Proxy(object, paramsProxy);
}