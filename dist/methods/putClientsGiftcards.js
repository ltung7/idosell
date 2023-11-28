import { paramsProxy } from "../params.js";

/**
 * Enables editing gift parameters, e.g. changing its balance, validity date, number or PIN
 * @typedef {Object} PutClientsGiftcardsRequest
 * @property {(giftCards: Array<Object>) => PutClientsGiftcardsRequest} giftCards List of cards to edit
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutClientsGiftcardsRequest} Enables editing gift parameters, e.g. changing its balance, validity date, number or PIN
 */
export const putClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/giftcards' }
    return new Proxy(object, paramsProxy);
}