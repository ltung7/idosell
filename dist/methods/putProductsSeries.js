import { paramsProxy } from "../params.js";

/**
 * Method allows you to update information about product series available in the IdoSell administration panel..
 * @typedef {Object} PutProductsSeriesRequest
 * @property {(series: Array<Object>) => PutProductsSeriesRequest} series Series list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsSeriesRequest} Method allows you to update information about product series available in the IdoSell administration panel..
 */
export const putProductsSeriesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/series' }
    return new Proxy(object, paramsProxy);
}