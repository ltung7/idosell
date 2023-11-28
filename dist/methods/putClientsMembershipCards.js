import { paramsProxy } from "../params.js";

/**
 * Method that enables assigning loyalty cards to customer accounts.
 * @typedef {Object} PutClientsMembershipCardsRequest
 * @property {(id: Integer) => PutClientsMembershipCardsRequest} id Customer ID.
 * @property {(login: String) => PutClientsMembershipCardsRequest} login Customer's login.
 * @property {(membership_cards: Array<Object>) => PutClientsMembershipCardsRequest} membership_cards 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsMembershipCardsRequest} Method that enables assigning loyalty cards to customer accounts.
 */
export const putClientsMembershipCardsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/membershipCards' }
    return new Proxy(object, paramsProxy);
}