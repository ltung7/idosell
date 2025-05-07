import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/returns/statuses' };
    return new Proxy(object, paramsProxy);
};
