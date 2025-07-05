import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/discounts/groups' };
    object.req = ["discountGroupId", "discountGroupName"];
    return new Proxy(object, paramsProxy);
};
