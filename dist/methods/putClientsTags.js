import { paramsProxy } from "../params.js";

/**
 * The method is used to update the value of the tags assigned to the client. A tag with value 0 is detached from the client
 * @typedef {Object} PutClientsTagsRequest
 * @property {(clientId: Integer) => PutClientsTagsRequest} clientId Unique client's number.
 * @property {(clientTags: Array<Object>) => PutClientsTagsRequest} clientTags 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsTagsRequest} The method is used to update the value of the tags assigned to the client. A tag with value 0 is detached from the client
 */
export const putClientsTagsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/tags' }
    return new Proxy(object, paramsProxy);
}