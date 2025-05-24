import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/subscriptions/changePriceAutoUpdate' };
    object.rootparams = "subscriptionsAutoPriceModel";
    object.arrays = ["subscriptionIds"];
    return new Proxy(object, paramsProxy);
};
