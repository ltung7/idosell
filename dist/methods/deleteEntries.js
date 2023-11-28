import { paramsProxy } from "../params.js";

/**
 * Enables deleting blog or news entry
 * @typedef {Object} DeleteEntriesRequest
 * @property {(entryId: Integer) => DeleteEntriesRequest} entryId Entry ID
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteEntriesRequest} Enables deleting blog or news entry
 */
export const deleteEntriesProxy = (object) => {
    object.gate = { method: 'post', node: '/entries/entries/delete' }
    return new Proxy(object, paramsProxy);
}