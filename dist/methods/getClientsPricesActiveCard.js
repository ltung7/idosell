import { paramsProxy } from "../params.js";

/**
 * Method that enables getting information about active customer loyalty cards assigned to customer accounts in the administration panel.
 * @typedef {Object} GetClientsPricesActiveCardRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsPricesActiveCardRequest} Method that enables getting information about active customer loyalty cards assigned to customer accounts in the administration panel.
 */
export const getClientsPricesActiveCardProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/prices/activeCard' }
    return new Proxy(object, paramsProxy);
}