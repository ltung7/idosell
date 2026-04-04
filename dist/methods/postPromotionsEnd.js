import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/promotions/promotions/end' };
    object.rootparams = true;
    object.req = ["promotionId"];
    return new Proxy(object, paramsProxy);
};
