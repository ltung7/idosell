import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/discounts/groups' };
    object.req = ["discountGroupName"];
    return new Proxy(object, paramsProxy);
};
