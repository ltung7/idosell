import { paramsProxy } from "../params.js";

export const getCouriersProxy = (object) => {
    object.gate = { method: 'get', node: '/couriers/couriers' }
    return new Proxy(object, paramsProxy);
}