import { paramsProxy } from "../params.js";

export const postPaymentsRepaymentProxy = (object) => {
    object.gate = { method: 'post', node: '/payments/repayment' }
    return new Proxy(object, paramsProxy);
}