import { paramsProxy } from "../params.js";

/**
 * The method is used to manage the most important settings in the store and in the panel. It enables, among others, configuration of tax and billing settings and configuration of warehouse management.
 * @typedef {Object} PutSystemConfigRequest
 * @property {(panelSettings: Object) => PutSystemConfigRequest} panelSettings Panel settings
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutSystemConfigRequest} The method is used to manage the most important settings in the store and in the panel. It enables, among others, configuration of tax and billing settings and configuration of warehouse management.
 */
export const putSystemConfigProxy = (object) => {
    object.gate = { method: 'put', node: '/system/config' }
    return new Proxy(object, paramsProxy);
}