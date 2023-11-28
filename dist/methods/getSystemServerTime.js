import { paramsProxy } from "../params.js";

/**
 * Method that returns the current server time, which is essential for authentication.
 * @typedef {Object} GetSystemServerTimeRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSystemServerTimeRequest} Method that returns the current server time, which is essential for authentication.
 */
export const getSystemServerTimeProxy = (object) => {
    object.gate = { method: 'get', node: '/system/serverTime' }
    return new Proxy(object, paramsProxy);
}