import { paramsProxy } from "../params.js";

/**
 * Method that enables adding new menu elements.
 * @typedef {Object} PostMenuRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostMenuRequest} Method that enables adding new menu elements.
 */
export const postMenuProxy = (object) => {
    object.gate = { method: 'post', node: '/menu/menu' }
    return new Proxy(object, paramsProxy);
}