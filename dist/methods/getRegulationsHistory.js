import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/regulations/history' };
    return new Proxy(object, paramsProxy);
};
