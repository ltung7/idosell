import { paramsProxy } from "../params.js";
import { paginationObject, nest } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/promotions/history/get' };
    object.rootparams = "request";
    object.custom = {
        page: paginationObject,
        promotionId: nest("promotionId", "filter", {}, false)
    };
    object.paginationObject = true;
    object.req = ["filter"];
    return new Proxy(object, paramsProxy);
};
