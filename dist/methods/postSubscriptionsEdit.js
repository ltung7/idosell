import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/subscriptions/edit' };
    object.rootparams = "subscriptionsEditRequest";
    object.arrays = ["subscriptionModels"];
    return new Proxy(object, paramsProxy);
};
