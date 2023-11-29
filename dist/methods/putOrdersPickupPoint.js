import { paramsProxy } from "../params.js";

export const putOrdersPickupPointProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/pickupPoint' }
    return new Proxy(object, paramsProxy);
}