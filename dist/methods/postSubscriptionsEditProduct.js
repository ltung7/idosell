import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/subscriptions/editProduct' };
    object.rootparams = "subscriptionEditProducts";
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
