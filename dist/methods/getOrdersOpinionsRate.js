import { paramsProxy } from "../params.js";

/**
 * Evaluation of the usefulness of opinions issued for orders.
 * @typedef {Object} GetOrdersOpinionsRateRequest
 * @property {(id: Integer) => GetOrdersOpinionsRateRequest} id 
 * @property {(operation: String) => GetOrdersOpinionsRateRequest} operation 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersOpinionsRateRequest} Evaluation of the usefulness of opinions issued for orders.
 */
export const getOrdersOpinionsRateProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/opinionsRate' }
    return new Proxy(object, paramsProxy);
}