import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/subscriptions/changeDeliveryDates' };
    object.rootparams = "subscriptionsDeliveryDatesModel";
    object.arrays = ["subscriptionIds"];
    return new Proxy(object, paramsProxy);
};
