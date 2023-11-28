import { paramsProxy } from "../params.js";

/**
 * Method that returns information about menus and menu elements.
 * @typedef {Object} GetMenuRequest
 * @property {(shop_id: Integer) => GetMenuRequest} shop_id Shop Id.
 * @property {(menu_id: Integer) => GetMenuRequest} menu_id Tree menu ID.
 * @property {(lang_id: String) => GetMenuRequest} lang_id Language ID.
 * @property {(node_id: Integer) => GetMenuRequest} node_id Menu node ID.
 * @property {(level: Integer) => GetMenuRequest} level Number of levels.
 * @property {(settings::textid_separator: String) => GetMenuRequest} settings::textid_separator Default: "\".
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetMenuRequest} Method that returns information about menus and menu elements.
 */
export const getMenuProxy = (object) => {
    object.gate = { method: 'get', node: '/menu/menu' }
    return new Proxy(object, paramsProxy);
}