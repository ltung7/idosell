import { paramsProxy } from "../params.js";

/**
 * Method that returns information about product sizes configured in the administration panel. List of size groups (with sizes that belong to particular group) is returned as a result.
 * @typedef {Object} GetSizesRequest
 * @property {(return_last_changed_time: String) => GetSizesRequest} return_last_changed_time When the value is 'y', the last size modification date is returned, formatted as YYYY-MM-DD HH-MM-SS.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSizesRequest} Method that returns information about product sizes configured in the administration panel. List of size groups (with sizes that belong to particular group) is returned as a result.
 */
export const getSizesProxy = (object) => {
    object.gate = { method: 'get', node: '/sizes/sizes' }
    return new Proxy(object, paramsProxy);
}