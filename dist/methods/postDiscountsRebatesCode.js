import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/code' };
    object.rootparams = true;
    object.req = ["campaign_id", "code_number"];
    return new Proxy(object, paramsProxy);
};
