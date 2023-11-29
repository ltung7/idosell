import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'get', node: '/discounts/groups' }
    object.custom = {
        page: page(false)
    };
    return new Proxy(object, paramsProxy);
}