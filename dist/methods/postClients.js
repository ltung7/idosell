import { paramsProxy } from "../params.js";

/**
 * Method that enables adding new customer accounts to the IdoSell Shop administration panel.
 * @typedef {Object} PostClientsRequest
 * @property {(clients: Array<Object>) => PostClientsRequest} clients Customer data.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostClientsRequest} Method that enables adding new customer accounts to the IdoSell Shop administration panel.
 */
export const postClientsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/clients' }
    return new Proxy(object, paramsProxy);
}