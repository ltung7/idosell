import { paramsProxy } from "../params.js";

/**
 * The method allows you to download labels for the courier from orders, complaints and returns.
 * @typedef {Object} GetPackagesLabelsRequest
 * @property {(eventId: Integer) => GetPackagesLabelsRequest} eventId Id.
 * @property {(eventType: String) => GetPackagesLabelsRequest} eventType Event type
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetPackagesLabelsRequest} The method allows you to download labels for the courier from orders, complaints and returns.
 */
export const getPackagesLabelsProxy = (object) => {
    object.gate = { method: 'get', node: '/packages/labels' }
    return new Proxy(object, paramsProxy);
}