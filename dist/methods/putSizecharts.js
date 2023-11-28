import { paramsProxy } from "../params.js";

/**
 * The method allows the size charts settings to be updated.
 * @typedef {Object} PutSizechartsRequest
 * @property {(sizeCharts: Array<Object>) => PutSizechartsRequest} sizeCharts 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutSizechartsRequest} The method allows the size charts settings to be updated.
 */
export const putSizechartsProxy = (object) => {
    object.gate = { method: 'put', node: '/sizecharts/sizecharts' }
    return new Proxy(object, paramsProxy);
}