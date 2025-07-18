import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/orders/packages' };
    object.req = [{ "any": ["rmaNumbers", "returnNumbers", "orderNumbers", "deliveryPackageNumbers"] }];
    return new Proxy(object, paramsProxy);
};
