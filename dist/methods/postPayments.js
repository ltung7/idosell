import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/payments/payments' };
    return new Proxy(object, paramsProxy);
};
