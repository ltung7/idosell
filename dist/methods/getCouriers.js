import { paramsProxy } from "../params.js";

/**
 * Method that returns all couriers available for a given country. It also returns information whether the courier service handles personal collections.
 * @typedef {Object} GetCouriersRequest
 * @property {(countryCode: String) => GetCouriersRequest} countryCode Country code in ISO 3166-1 standard.
 * @property {(resultsPage: Integer) => GetCouriersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetCouriersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetCouriersRequest} Method that returns all couriers available for a given country. It also returns information whether the courier service handles personal collections.
 */
export const getCouriersProxy = (object) => {
    object.gate = { method: 'get', node: '/couriers/couriers' }
    return new Proxy(object, paramsProxy);
}