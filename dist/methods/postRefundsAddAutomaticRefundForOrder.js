import { paramsProxy } from "../params.js";

export const postRefundsAddAutomaticRefundForOrderProxy = (object) => {
    object.gate = { method: 'post', node: '/refunds/addAutomaticRefundForOrder' }
    return new Proxy(object, paramsProxy);
}