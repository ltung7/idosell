import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/regulations/history' };
    object.custom = {
        page
    };
    object.req = ["langId"];
    return new Proxy(object, paramsProxy);
};
