import { paramsProxy } from "../params.js";

export const putRefundsConfirmRefundProxy = (object) => {
    object.gate = { method: 'put', node: '/refunds/confirmRefund' }
    return new Proxy(object, paramsProxy);
}