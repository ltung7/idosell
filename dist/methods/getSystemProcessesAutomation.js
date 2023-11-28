import { paramsProxy } from "../params.js";

/**
 * It allows you to download the current automation processes configuration .
 * @typedef {Object} GetSystemProcessesAutomationRequest
 * @property {(shopId: Integer) => GetSystemProcessesAutomationRequest} shopId Shop Id
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSystemProcessesAutomationRequest} It allows you to download the current automation processes configuration .
 */
export const getSystemProcessesAutomationProxy = (object) => {
    object.gate = { method: 'get', node: '/system/processesAutomation' }
    return new Proxy(object, paramsProxy);
}