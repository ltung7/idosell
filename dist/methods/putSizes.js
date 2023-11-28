import { paramsProxy } from "../params.js";

/**
 * Method that enables creating, deleting and editing product sizes in the administration panel.
 * @typedef {Object} PutSizesRequest
 * @property {(sizes: Array<Object>) => PutSizesRequest} sizes Size table.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutSizesRequest} Method that enables creating, deleting and editing product sizes in the administration panel.
 */
export const putSizesProxy = (object) => {
    object.gate = { method: 'put', node: '/sizes/sizes' }
    return new Proxy(object, paramsProxy);
}