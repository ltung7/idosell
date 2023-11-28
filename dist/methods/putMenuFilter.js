import { paramsProxy } from "../params.js";

/**
 * The method allows you to manage filter settings in menu nodes.
 * @typedef {Object} PutMenuFilterRequest
 * @property {(shopId: Integer) => PutMenuFilterRequest} shopId Shop Id
 * @property {(languageId: String) => PutMenuFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(productMenuTreeId: Integer) => PutMenuFilterRequest} productMenuTreeId Tree menu ID.
 * @property {(productMenuNodeId: Integer) => PutMenuFilterRequest} productMenuNodeId Menu element ID.
 * @property {(filterForMenuNodeIsDefault: String) => PutMenuFilterRequest} filterForMenuNodeIsDefault Default filter settings.
 * @property {(menuFiltersActive: Array<Object>) => PutMenuFilterRequest} menuFiltersActive Active filters.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutMenuFilterRequest} The method allows you to manage filter settings in menu nodes.
 */
export const putMenuFilterProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/filter' }
    return new Proxy(object, paramsProxy);
}