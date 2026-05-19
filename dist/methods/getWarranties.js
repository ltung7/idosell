import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/warranties/warranties' };
    object.custom = {
        page: (pageIndex, limit) => page(pageIndex, limit, true)
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
};
