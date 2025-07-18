import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/clients/deliveryAddress' };
    object.req = [{ "any": ["clientCodesExternal", "clientIds", "clientLogins"] }];
    return new Proxy(object, paramsProxy);
};
