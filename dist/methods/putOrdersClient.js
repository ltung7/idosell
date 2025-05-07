import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/orders/client' };
    return new Proxy(object, paramsProxy);
};
