import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getCouriersPickupPointsProxy = (object) => {
    object.gate = { method: 'get', node: '/couriers/pickupPoints' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}