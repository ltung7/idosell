import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/refunds/addManualRefund' };
    return new Proxy(object, paramsProxy);
};
