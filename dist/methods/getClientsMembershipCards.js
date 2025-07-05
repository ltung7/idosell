import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/clients/membershipCards' };
    object.req = [{ "any": ["id", "login"] }];
    return new Proxy(object, paramsProxy);
};
