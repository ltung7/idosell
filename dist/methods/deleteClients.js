import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'delete', node: '/clients/remove' };
    return new Proxy(object, paramsProxy);
};
