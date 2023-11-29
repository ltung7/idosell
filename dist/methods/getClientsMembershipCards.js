import { paramsProxy } from "../params.js";

export const getClientsMembershipCardsProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/membershipCards' }
    return new Proxy(object, paramsProxy);
}