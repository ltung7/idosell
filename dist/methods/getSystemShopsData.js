import { paramsProxy } from "../params.js";

/**
 * Method is used for extracting information about a shop and its most important configuration settings.
 * @typedef {Object} GetSystemShopsDataRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSystemShopsDataRequest} Method is used for extracting information about a shop and its most important configuration settings.
 */
export const getSystemShopsDataProxy = (object) => {
    object.gate = { method: 'get', node: '/system/shopsData' }
    return new Proxy(object, paramsProxy);
}