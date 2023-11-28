import { paramsProxy } from "../params.js";

/**
 * Method that enables sorting of menu elements.
 * @typedef {Object} PutMenuSortRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutMenuSortRequest} Method that enables sorting of menu elements.
 */
export const putMenuSortProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/sort' }
    return new Proxy(object, paramsProxy);
}