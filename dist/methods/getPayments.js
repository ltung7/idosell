import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/payments/payments' };
    object.req = ["paymentNumber", "sourceType"];
    return new Proxy(object, paramsProxy);
};
