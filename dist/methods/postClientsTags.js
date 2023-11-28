import { paramsProxy } from "../params.js";

/**
 * Use this method to add new tags and their associated values to the client
 * @typedef {Object} PostClientsTagsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostClientsTagsRequest} Use this method to add new tags and their associated values to the client
 */
export const postClientsTagsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/tags' }
    return new Proxy(object, paramsProxy);
}