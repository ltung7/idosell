import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting a list of customer accounts that agreed / did not agree to receiving text message newsletters.
 * @typedef {Object} GetClientsNewsletterEmailSMSRequest
 * @property {(shops: Array<Object>) => GetClientsNewsletterEmailSMSRequest} shops 
 * @property {(language: String) => GetClientsNewsletterEmailSMSRequest} language Customer language ID.
 * @property {(date: Object) => GetClientsNewsletterEmailSMSRequest} date 
 * @property {(return_elements: Array<String>) => GetClientsNewsletterEmailSMSRequest} return_elements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(results_page: Integer) => GetClientsNewsletterEmailSMSRequest} results_page Results page number. Numbering begins at 0. Default value: 0.
 * @property {(results_limit: Integer) => GetClientsNewsletterEmailSMSRequest} results_limit Maximum number of results on a single page. Default is 100.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsNewsletterEmailSMSRequest} Method that enables extracting a list of customer accounts that agreed / did not agree to receiving text message newsletters.
 */
export const getClientsNewsletterEmailSMSProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/newsletterEmailSMS' }
    return new Proxy(object, paramsProxy);
}