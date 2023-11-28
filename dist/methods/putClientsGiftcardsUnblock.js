import { paramsProxy } from "../params.js";

/**
 * Enables gift card unblocking
 * @typedef {Object} PutClientsGiftcardsUnblockRequest
 * @property {(giftCards: Array<Object>) => PutClientsGiftcardsUnblockRequest} giftCards List of gift cards
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsGiftcardsUnblockRequest} Enables gift card unblocking
 */
export const putClientsGiftcardsUnblockProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards/unblock' }
    return new Proxy(object, paramsProxy);
}