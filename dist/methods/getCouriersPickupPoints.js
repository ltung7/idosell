import { paramsProxy } from "../params.js";

/**
 * The method returns personal collection points within its own network of collection points and for integrated couriers.
 * @typedef {Object} GetCouriersPickupPointsRequest
 * @property {(courierId: Integer) => GetCouriersPickupPointsRequest} courierId Courier ID.
 * @property {(pickupPointId: String) => GetCouriersPickupPointsRequest} pickupPointId Collection point ID.
 * @property {(pickupPointExternalId: String) => GetCouriersPickupPointsRequest} pickupPointExternalId External system code.
 * @property {(resultsPage: Integer) => GetCouriersPickupPointsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetCouriersPickupPointsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetCouriersPickupPointsRequest} The method returns personal collection points within its own network of collection points and for integrated couriers.
 */
export const getCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'get', node: '/couriers/pickupPoints' }
    return new Proxy(object, paramsProxy);
}