import { paramsProxy } from "../params.js";

/**
 * Method that enables deleting existing menu elements.
 * @typedef {Object} DeleteMenuRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteMenuRequest} Method that enables deleting existing menu elements.
 */
export const deleteMenuProxy = (object) => {
    object.gate = { method: 'post', node: '/menu/menu/delete' }
    return new Proxy(object, paramsProxy);
}