import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/refunds/addAutomaticRefundForOrder' };
    return new Proxy(object, paramsProxy);
};
