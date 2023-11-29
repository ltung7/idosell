import { paramsProxy } from "../params.js";

export const putDeliveriesDefaultProfilesProxy = (object) => {
    object.gate = { method: 'put', node: '/deliveries/defaultProfiles' }
    return new Proxy(object, paramsProxy);
}