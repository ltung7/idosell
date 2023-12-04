import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getDiscountsGroupsProxy = (object) => {
    object.gate = { method: 'get', node: '/discounts/groups' }
    object.custom = {
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}