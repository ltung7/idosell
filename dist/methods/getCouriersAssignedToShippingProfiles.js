import { paramsProxy } from "../params.js";

export const getCouriersAssignedToShippingProfilesProxy = (object) => {
    object.gate = { method: 'get', node: '/couriers/assignedToShippingProfiles' }
    return new Proxy(object, paramsProxy);
}