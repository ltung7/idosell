import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/refunds/getRefundStatus' };
    object.req = ["sourceId", "paymentId", "sourceType"];
    return new Proxy(object, paramsProxy);
};
