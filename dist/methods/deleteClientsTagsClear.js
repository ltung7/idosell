import { paramsProxy } from "../params.js";

/**
 * Use this method to delete all tags assigned to a customer
 * @typedef {Object} DeleteClientsTagsClearRequest
 * @property {(clientId: Integer) => DeleteClientsTagsClearRequest} clientId Unique client's number.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteClientsTagsClearRequest} Use this method to delete all tags assigned to a customer
 */
export const deleteClientsTagsClearProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/tags/clear/delete' }
    return new Proxy(object, paramsProxy);
}