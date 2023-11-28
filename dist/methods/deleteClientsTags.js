import { paramsProxy } from "../params.js";

/**
 * Use this method to delete selected tags assigned to a customer
 * @typedef {Object} DeleteClientsTagsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteClientsTagsRequest} Use this method to delete selected tags assigned to a customer
 */
export const deleteClientsTagsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/tags/delete' }
    return new Proxy(object, paramsProxy);
}