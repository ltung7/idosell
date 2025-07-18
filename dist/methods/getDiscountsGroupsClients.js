import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/discounts/groups/clients' };
    object.req = ["discountGroupId"];
    return new Proxy(object, paramsProxy);
};
