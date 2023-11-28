import { paramsProxy } from "../params.js";

/**
 * The method allows the removal of size charts.
 * @typedef {Object} DeleteSizechartsRequest
 * @property {(ids: Array<Integer>) => DeleteSizechartsRequest} ids #!identyfikatory!#
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteSizechartsRequest} The method allows the removal of size charts.
 */
export const deleteSizechartsProxy = (object) => {
    object.gate = { method: 'post', node: '/sizecharts/sizecharts/delete' }
    return new Proxy(object, paramsProxy);
}