import { paramsProxy } from "../params.js";

export const getPaymentsProfilesProxy = (object) => {
    object.gate = { method: 'get', node: '/payments/profiles' }
    return new Proxy(object, paramsProxy);
}