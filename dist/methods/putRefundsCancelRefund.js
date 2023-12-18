import { paramsProxy } from "../params.js";

export const putRefundsCancelRefundProxy = (object) => {
    object.gate = { method: 'put', node: '/refunds/cancelRefund' }
    return new Proxy(object, paramsProxy);
}