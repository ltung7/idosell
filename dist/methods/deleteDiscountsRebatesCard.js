import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/card/delete' };
    object.rootparams = "campaign_id";
    return new Proxy(object, paramsProxy);
};
