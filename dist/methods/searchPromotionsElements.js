import { paramsProxy } from "../params.js";
import { orderByProperty, paginationObject, nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/promotions/elements/list' };
    object.rootparams = "request";
    object.custom = {
        orderByProperty,
        page: paginationObject,
        ids: nest("ids", "filter", {}, true),
        types: nest("types", "filter", {}, true),
        promotionIds: nest("promotionIds", "filter", {}, true)
    };
    object.paginationObject = true;
    return new Proxy(object, paramsProxy);
};
