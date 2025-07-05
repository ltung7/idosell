import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/externalCode' };
    object.req = [{ "any": ["client_id", "client_login"] }];
    return new Proxy(object, paramsProxy);
};
