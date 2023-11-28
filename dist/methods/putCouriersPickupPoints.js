import { paramsProxy } from "../params.js";

/**
 * The method enables updating personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 * @typedef {Object} PutCouriersPickupPointsRequest
 * @property {(pickupPoints: Array<Object>) => PutCouriersPickupPointsRequest} pickupPoints 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutCouriersPickupPointsRequest} The method enables updating personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 */
export const putCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'put', node: '/couriers/pickupPoints' }
    return new Proxy(object, paramsProxy);
}