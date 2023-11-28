import { paramsProxy } from "../params.js";

/**
 * Allows for downloading all types of gift cards defined in the administration panel
 * @typedef {Object} GetClientsGiftcardsTypesRequest
 * @property {(resultsPage: Integer) => GetClientsGiftcardsTypesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsGiftcardsTypesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsGiftcardsTypesRequest} Allows for downloading all types of gift cards defined in the administration panel
 */
export const getClientsGiftcardsTypesProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/giftcards/types' }
    return new Proxy(object, paramsProxy);
}