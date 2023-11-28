import { paramsProxy } from "../params.js";

/**
 * This update method allows to update the data in existing complaints
 * @typedef {Object} PutRmaRequest
 * @property {(rmas: Array<Object>) => PutRmaRequest} rmas Complaints.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutRmaRequest} This update method allows to update the data in existing complaints
 */
export const putRmaProxy = (object) => {
    object.gate = { method: 'put', node: '/rma/rma' }
    return new Proxy(object, paramsProxy);
}