import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/responsibility/entities' };
    object.custom = {
        page
    };
    return new Proxy(object, paramsProxy);
};
