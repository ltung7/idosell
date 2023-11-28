import { paramsProxy } from "../params.js";

/**
 * Enables downloading blog or news entry data
 * @typedef {Object} GetEntriesRequest
 * @property {(entryId: Integer) => GetEntriesRequest} entryId Entry ID
 * @property {(langId: String) => GetEntriesRequest} langId Language ID
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetEntriesRequest} Enables downloading blog or news entry data
 */
export const getEntriesProxy = (object) => {
    object.gate = { method: 'get', node: '/entries/entries' }
    return new Proxy(object, paramsProxy);
}