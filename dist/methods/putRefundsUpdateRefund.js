import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/refunds/updateRefund' };
    object.req = ["sourceType", "sourceId", "paymentId", "refundValue", "refundCurrency"];
    return new Proxy(object, paramsProxy);
};
