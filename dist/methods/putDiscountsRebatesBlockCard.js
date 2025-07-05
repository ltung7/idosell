import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/discounts/rebates/blockCard' };
    object.rootparams = true;
    object.req = ["card_number"];
    return new Proxy(object, paramsProxy);
};
