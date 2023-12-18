import { paramsProxy } from "../params.js";

export const putRefundsUpdateRefundProxy = (object) => {
    object.gate = { method: 'put', node: '/refunds/updateRefund' }
    return new Proxy(object, paramsProxy);
}