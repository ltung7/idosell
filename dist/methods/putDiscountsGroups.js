import { paramsProxy } from "../params.js";

export const putDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'put', node: '/discounts/groups' }
    return new Proxy(object, paramsProxy);
}