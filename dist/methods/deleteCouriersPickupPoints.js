import { paramsProxy } from "../params.js";

/**
 * The method enables cancelling personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 * @typedef {Object} DeleteCouriersPickupPointsRequest
 * @property {(pickupPointDeleteRequests: Array<Object>) => DeleteCouriersPickupPointsRequest} pickupPointDeleteRequests 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteCouriersPickupPointsRequest} The method enables cancelling personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 */
export const deleteCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'post', node: '/couriers/pickupPoints/delete' }
    return new Proxy(object, paramsProxy);
}