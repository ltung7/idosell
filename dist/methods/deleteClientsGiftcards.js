import { paramsProxy } from "../params.js";

/**
 * Enables deleting a single or a list of gift cards
 * @typedef {Object} DeleteClientsGiftcardsRequest
 * @property {(giftCards: Array<Object>) => DeleteClientsGiftcardsRequest} giftCards List of gift cards
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteClientsGiftcardsRequest} Enables deleting a single or a list of gift cards
 */
export const deleteClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/giftcards/delete' }
    return new Proxy(object, paramsProxy);
}