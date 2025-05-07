import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/images' };
    return new Proxy(object, paramsProxy);
};
