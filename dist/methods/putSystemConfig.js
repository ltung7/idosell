import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/system/config' };
    return new Proxy(object, paramsProxy);
};
