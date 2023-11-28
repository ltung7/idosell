import { paramsProxy } from "../params.js";

/**
 * Allows to download all of the payment profiles defined in the administration panel
 * @typedef {Object} GetPaymentsProfilesRequest
 * @property {(resultsPage: Integer) => GetPaymentsProfilesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetPaymentsProfilesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetPaymentsProfilesRequest} Allows to download all of the payment profiles defined in the administration panel
 */
export const getPaymentsProfilesProxy = (object) => {
    object.gate = { method: 'get', node: '/payments/profiles' }
    return new Proxy(object, paramsProxy);
}