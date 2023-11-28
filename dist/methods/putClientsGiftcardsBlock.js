import { paramsProxy } from "../params.js";

/**
 * Enables gift card blocking
 * @typedef {Object} PutClientsGiftcardsBlockRequest
 * @property {(giftCards: Array<Object>) => PutClientsGiftcardsBlockRequest} giftCards List of gift cards
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsGiftcardsBlockRequest} Enables gift card blocking
 */
export const putClientsGiftcardsBlockProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards/block' }
    return new Proxy(object, paramsProxy);
}