import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/refunds/cancelRefund' };
    return new Proxy(object, paramsProxy);
}