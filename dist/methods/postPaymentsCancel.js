import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/payments/cancel' };
    object.req = ["sourceType", "paymentNumber"];
    return new Proxy(object, paramsProxy);
};
