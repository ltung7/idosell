import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/payments/payments' };
    object.req = ["sourceType", "paymentNumber", "value"];
    return new Proxy(object, paramsProxy);
};
