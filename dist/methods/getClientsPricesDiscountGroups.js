import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/clients/prices/discountGroups' };
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
};
