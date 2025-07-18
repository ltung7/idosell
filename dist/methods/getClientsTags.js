import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/clients/tags' };
    object.req = ["clientId"];
    return new Proxy(object, paramsProxy);
};
