import { paramsProxy } from "../params.js";

export const postRefundsAddAutomaticRefundProxy = (object) => {
    object.gate = { method: 'post', node: '/refunds/addAutomaticRefund' }
    return new Proxy(object, paramsProxy);
}