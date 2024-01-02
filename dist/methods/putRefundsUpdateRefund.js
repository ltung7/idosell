import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/refunds/updateRefund' };
    return new Proxy(object, paramsProxy);
}