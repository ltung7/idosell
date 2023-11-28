import { paramsProxy } from "../params.js";

/**
 * Allows to download all possible complaint statuses
 * @typedef {Object} GetRmaStatusesRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetRmaStatusesRequest} Allows to download all possible complaint statuses
 */
export const getRmaStatusesProxy = (object) => {
    object.gate = { method: 'get', node: '/rma/statuses' }
    return new Proxy(object, paramsProxy);
}