import { paramsProxy } from "../params.js";

/**
 * The method enables adding personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 * @typedef {Object} PostCouriersPickupPointsRequest
 * @property {(pickupPoints: Array<Object>) => PostCouriersPickupPointsRequest} pickupPoints 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostCouriersPickupPointsRequest} The method enables adding personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 */
export const postCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'post', node: '/couriers/pickupPoints' }
    return new Proxy(object, paramsProxy);
}