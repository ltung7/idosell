import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/payments/payments' };
    object.req = ["sourceId", "sourceType", "paymentFormId", "value", "type"];
    return new Proxy(object, paramsProxy);
};
