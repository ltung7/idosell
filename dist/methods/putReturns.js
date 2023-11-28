import { paramsProxy } from "../params.js";

/**
 * Method that enables editing returns issued for orders in the administration panel.
 * @typedef {Object} PutReturnsRequest
 * @property {(returns: Array<Object>) => PutReturnsRequest} returns 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutReturnsRequest} Method that enables editing returns issued for orders in the administration panel.
 */
export const putReturnsProxy = (object) => {
    object.gate = { method: 'put', node: '/returns/returns' }
    return new Proxy(object, paramsProxy);
}