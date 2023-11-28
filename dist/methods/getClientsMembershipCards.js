import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about loyalty cards available in the administration panel.
 * @typedef {Object} GetClientsMembershipCardsRequest
 * @property {(id: Integer) => GetClientsMembershipCardsRequest} id Customer ID.
 * @property {(login: String) => GetClientsMembershipCardsRequest} login Customer's login.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsMembershipCardsRequest} Method that enables extracting information about loyalty cards available in the administration panel.
 */
export const getClientsMembershipCardsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/membershipCards' }
    return new Proxy(object, paramsProxy);
}