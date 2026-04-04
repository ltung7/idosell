import { paramsProxy } from "../params.js";
import { orderByProperty, paginationObject, nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/promotions/promotionsArchive/list' };
    object.rootparams = "request";
    object.custom = {
        orderByProperty,
        page: paginationObject,
        shops: nest("shops", "filter", {}, true),
        archivedDate: nest("archivedDate", "filter", {}, false)
    };
    object.paginationObject = true;
    return new Proxy(object, paramsProxy);
};
