import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/subscriptions/setRebateCode' };
    object.rootparams = "request";
    return new Proxy(object, paramsProxy);
};
