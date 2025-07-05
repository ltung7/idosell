import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/payments/repayment' };
    object.req = ["source_id", "source_type", "payment_form_id", "value"];
    return new Proxy(object, paramsProxy);
};
