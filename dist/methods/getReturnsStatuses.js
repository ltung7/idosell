import { paramsProxy } from "../params.js";

/**
 * Allows to download all configurable return statuses
 * @typedef {Object} GetReturnsStatusesRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetReturnsStatusesRequest} Allows to download all configurable return statuses
 */
export const getReturnsStatusesProxy = (object) => {
    object.gate = { method: 'get', node: '/returns/statuses' }
    return new Proxy(object, paramsProxy);
}