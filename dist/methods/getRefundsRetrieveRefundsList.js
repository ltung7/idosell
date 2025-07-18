import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/refunds/retrieveRefundsList' };
    object.custom = {
        page
    };
    object.req = ["sourceType"];
    return new Proxy(object, paramsProxy);
};
