import { paramsProxy } from "../params.js";

export const putCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'put', node: '/couriers/pickupPoints' }
    return new Proxy(object, paramsProxy);
}