import { paramsProxy } from "../params.js";

export const getDeliveriesProfilesProxy = (object) => {
    object.gate = { method: 'get', node: '/deliveries/profiles' }
    return new Proxy(object, paramsProxy);
}