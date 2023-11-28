import { paramsProxy } from "../params.js";

/**
 * Method that enables editing product warranty language settings.
 * @typedef {Object} PutWarrantiesLanguageDataRequest
 * @property {(lang_data: Array<Object>) => PutWarrantiesLanguageDataRequest} lang_data 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutWarrantiesLanguageDataRequest} Method that enables editing product warranty language settings.
 */
export const putWarrantiesLanguageDataProxy = (object) => {
    object.gate = { method: 'put', node: '/warranties/languageData' }
    return new Proxy(object, paramsProxy);
}