import { paramsProxy } from "../params.js";

export const deleteDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'post', node: '/discounts/groups/delete' }
    return new Proxy(object, paramsProxy);
}