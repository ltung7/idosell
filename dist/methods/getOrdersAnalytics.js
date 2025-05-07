import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/analytics' };
    return new Proxy(object, paramsProxy);
};
