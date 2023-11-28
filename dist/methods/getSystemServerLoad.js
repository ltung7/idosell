import { paramsProxy } from "../params.js";

/**
 * This method returns server status information which is useful in determining whether the server is currently overloaded.
 * @typedef {Object} GetSystemServerLoadRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSystemServerLoadRequest} This method returns server status information which is useful in determining whether the server is currently overloaded.
 */
export const getSystemServerLoadProxy = (object) => {
    object.gate = { method: 'get', node: '/system/serverLoad' }
    return new Proxy(object, paramsProxy);
}