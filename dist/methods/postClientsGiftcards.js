import { paramsProxy } from "../params.js";

/**
 * Enables adding new gift cards with the selected card type
 * @typedef {Object} PostClientsGiftcardsRequest
 * @property {(giftCards: Array<Object>) => PostClientsGiftcardsRequest} giftCards List of cards to add
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostClientsGiftcardsRequest} Enables adding new gift cards with the selected card type
 */
export const postClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/giftcards' }
    return new Proxy(object, paramsProxy);
}