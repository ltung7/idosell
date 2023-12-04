import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getDeliveriesProfilesProxy = (object) => {
    object.gate = { method: 'get', node: '/deliveries/profiles' }
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
}