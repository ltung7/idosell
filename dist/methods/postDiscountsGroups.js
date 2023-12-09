import { paramsProxy } from "../params.js";

export const postDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/groups' }
    return new Proxy(object, paramsProxy);
}