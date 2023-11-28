import { paramsProxy } from "../params.js";

/**
 * Allows to download all of the delivery profiles defined in the administration panel
 * @typedef {Object} GetDeliveriesProfilesRequest
 * @property {(resultsPage: Integer) => GetDeliveriesProfilesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetDeliveriesProfilesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetDeliveriesProfilesRequest} Allows to download all of the delivery profiles defined in the administration panel
 */
export const getDeliveriesProfilesProxy = (object) => {
    object.gate = { method: 'get', node: '/deliveries/profiles' }
    return new Proxy(object, paramsProxy);
}