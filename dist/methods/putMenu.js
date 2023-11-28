import { paramsProxy } from "../params.js";

/**
 * Method that enables editing existing menu elements.
 * @typedef {Object} PutMenuRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutMenuRequest} Method that enables editing existing menu elements.
 */
export const putMenuProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/menu' }
    return new Proxy(object, paramsProxy);
}