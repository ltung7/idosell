import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/refunds/addAutomaticRefund' };
    return new Proxy(object, paramsProxy);
};
