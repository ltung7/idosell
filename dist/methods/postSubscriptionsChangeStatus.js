import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/subscriptions/changeStatus' };
    object.rootparams = "subscriptionsStatusModel";
    object.arrays = ["subscriptionIds"];
    return new Proxy(object, paramsProxy);
};
