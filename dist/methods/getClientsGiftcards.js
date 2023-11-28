import { paramsProxy } from "../params.js";

/**
 * Enables searching for gift cards and retrieving information about indicated gift cards
 * @typedef {Object} GetClientsGiftcardsRequest
 * @property {(giftCards: Array<Object>) => GetClientsGiftcardsRequest} giftCards List of gift cards
 * @property {(searchGiftCards: Object) => GetClientsGiftcardsRequest} searchGiftCards element is an element array of type searchGiftCards
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsGiftcardsRequest} Enables searching for gift cards and retrieving information about indicated gift cards
 */
export const getClientsGiftcardsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/giftcards' }
    return new Proxy(object, paramsProxy);
}