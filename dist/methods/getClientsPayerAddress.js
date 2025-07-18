import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/clients/payerAddress' };
    object.custom = {
        page
    };
    object.req = ["clientId"];
    return new Proxy(object, paramsProxy);
};
