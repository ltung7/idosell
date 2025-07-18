import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/refunds/getPossibleAutoRefunds' };
    object.req = ["sourceId", "sourceType"];
    return new Proxy(object, paramsProxy);
};
