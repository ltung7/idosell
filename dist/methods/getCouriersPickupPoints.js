import { paramsProxy } from "../params.js";

export const getCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'get', node: '/couriers/pickupPoints' }
    return new Proxy(object, paramsProxy);
}