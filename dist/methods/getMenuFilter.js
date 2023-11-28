import { paramsProxy } from "../params.js";

/**
 * The method returns information about filter settings in menu nodes.
 * @typedef {Object} GetMenuFilterRequest
 * @property {(shopId: Integer) => GetMenuFilterRequest} shopId Shop Id
 * @property {(languageId: String) => GetMenuFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(productMenuTreeId: Integer) => GetMenuFilterRequest} productMenuTreeId Tree menu ID.
 * @property {(productMenuNodeId: Integer) => GetMenuFilterRequest} productMenuNodeId Menu element ID.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetMenuFilterRequest} The method returns information about filter settings in menu nodes.
 */
export const getMenuFilterProxy = (object) => {
    object.gate = { method: 'get', node: '/menu/filter' }
    return new Proxy(object, paramsProxy);
}