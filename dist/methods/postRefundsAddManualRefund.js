import { paramsProxy } from "../params.js";

export const postRefundsAddManualRefundProxy = (object) => {
    object.gate = { method: 'post', node: '/refunds/addManualRefund' }
    return new Proxy(object, paramsProxy);
}