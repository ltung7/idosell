import { paramsProxy } from "../params.js";

export const postCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'post', node: '/couriers/pickupPoints' }
    return new Proxy(object, paramsProxy);
}