import { paramsProxy } from "../params.js";

/**
 * The method is used for edit of processes automation settings .
 * @typedef {Object} PutSystemProcessesAutomationRequest
 * @property {(shopId: Integer) => PutSystemProcessesAutomationRequest} shopId Shop Id
 * @property {(orders: Object) => PutSystemProcessesAutomationRequest} orders Orders.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutSystemProcessesAutomationRequest} The method is used for edit of processes automation settings .
 */
export const putSystemProcessesAutomationProxy = (object) => {
    object.gate = { method: 'put', node: '/system/processesAutomation' }
    return new Proxy(object, paramsProxy);
}