import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getCouriersProxy = (object) => {
    object.gate = { method: 'get', node: '/couriers/couriers' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}