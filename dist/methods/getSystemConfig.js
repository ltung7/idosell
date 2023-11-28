import { paramsProxy } from "../params.js";

/**
 * Method is used for extracting information about a shop and its most important configuration settings.
 * @typedef {Object} GetSystemConfigRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSystemConfigRequest} Method is used for extracting information about a shop and its most important configuration settings.
 */
export const getSystemConfigProxy = (object) => {
    object.gate = { method: 'get', node: '/system/config' }
    return new Proxy(object, paramsProxy);
}