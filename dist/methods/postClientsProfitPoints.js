import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/profitPoints' };
    object.req = ["client_id", "operation", "score"];
    return new Proxy(object, paramsProxy);
};
