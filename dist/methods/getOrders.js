import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/orders' };
    return new Proxy(object, paramsProxy);
};
