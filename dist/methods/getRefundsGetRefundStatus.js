import { paramsProxy } from "../params.js";

export const getRefundsGetRefundStatusProxy = (object) => {
    object.gate = { method: 'get', node: '/refunds/getRefundStatus' }
    return new Proxy(object, paramsProxy);
}