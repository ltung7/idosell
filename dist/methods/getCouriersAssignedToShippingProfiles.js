import { paramsProxy } from "../params.js";

/**
 * Retrieves information about assigned couriers to delivery profiles
 * @typedef {Object} GetCouriersAssignedToShippingProfilesRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetCouriersAssignedToShippingProfilesRequest} Retrieves information about assigned couriers to delivery profiles
 */
export const getCouriersAssignedToShippingProfilesProxy = (object) => {
    object.gate = { method: 'get', node: '/couriers/assignedToShippingProfiles' }
    return new Proxy(object, paramsProxy);
}