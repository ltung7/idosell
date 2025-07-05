import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/refunds/cancelRefund' };
    object.req = ["sourceType", "sourceId", "paymentId"];
    return new Proxy(object, paramsProxy);
};
