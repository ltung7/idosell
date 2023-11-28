import { paramsProxy } from "../params.js";

/**
 * Use this method to retrieve all tags assigned to a client
 * @typedef {Object} GetClientsTagsRequest
 * @property {(clientId: Integer) => GetClientsTagsRequest} clientId Unique client's number.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsTagsRequest} Use this method to retrieve all tags assigned to a client
 */
export const getClientsTagsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/tags' }
    return new Proxy(object, paramsProxy);
}