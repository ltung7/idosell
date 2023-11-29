import { paramsProxy } from "../params.js";

export const deleteCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'post', node: '/couriers/pickupPoints/delete' }
    return new Proxy(object, paramsProxy);
}