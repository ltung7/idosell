import { paramsProxy } from "../params.js";

/**
 * The method allows size charts to be downloaded.
 * @typedef {Object} GetSizechartsRequest
 * @property {(ids: Array<Integer>) => GetSizechartsRequest} ids IDs
 * @property {(names: Array<String>) => GetSizechartsRequest} names Names of size charts
 * @property {(languages: Array<String>) => GetSizechartsRequest} languages List of languages
 * @property {(resultsPage: Integer) => GetSizechartsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetSizechartsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetSizechartsRequest} The method allows size charts to be downloaded.
 */
export const getSizechartsProxy = (object) => {
    object.gate = { method: 'get', node: '/sizecharts/sizecharts' }
    return new Proxy(object, paramsProxy);
}