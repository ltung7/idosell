import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/system/serverTime' };
    return new Proxy(object, paramsProxy);
};
