import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/system/units' };
    return new Proxy(object, paramsProxy);
};
