import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/discounts/rebates/card/delete' };
    object.rootparams = true;
    return new Proxy(object, paramsProxy);
};
