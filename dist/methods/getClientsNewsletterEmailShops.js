import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting a list of customer accounts that agreed / did not agree to receiving email newsletters.
 * @typedef {Object} GetClientsNewsletterEmailShopsRequest
 * @property {(shops: Array<Object>) => GetClientsNewsletterEmailShopsRequest} shops 
 * @property {(language: String) => GetClientsNewsletterEmailShopsRequest} language Customer language ID.
 * @property {(date: Object) => GetClientsNewsletterEmailShopsRequest} date 
 * @property {(return_elements: Array<String>) => GetClientsNewsletterEmailShopsRequest} return_elements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(results_page: Integer) => GetClientsNewsletterEmailShopsRequest} results_page Results page number. Numbering begins at 0. Default value: 0.
 * @property {(results_limit: Integer) => GetClientsNewsletterEmailShopsRequest} results_limit Maximum number of results on a single page. Default is 100.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsNewsletterEmailShopsRequest} Method that enables extracting a list of customer accounts that agreed / did not agree to receiving email newsletters.
 */
export const getClientsNewsletterEmailShopsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/newsletterEmailShops' }
    return new Proxy(object, paramsProxy);
}