import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/subscriptions/addProduct' };
    object.rootparams = "addProducts";
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
