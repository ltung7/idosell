import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/promotions/settings/set' };
    object.rootparams = "request";
    return new Proxy(object, paramsProxy);
};
