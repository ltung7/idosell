import { paramsProxy } from "../params.js";

export const putClientsMembershipCardsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/membershipCards' }
    return new Proxy(object, paramsProxy);
}