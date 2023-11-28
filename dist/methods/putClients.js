import { paramsProxy } from "../params.js";

/**
 * Method enables modifying existing customer account data.
 * @typedef {Object} PutClientsRequest
 * @property {(clients: Array<Object>) => PutClientsRequest} clients Customer data.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsRequest} Method enables modifying existing customer account data.
 */
export const putClientsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/clients' }
    return new Proxy(object, paramsProxy);
}