import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/payments/confirm' };
    return new Proxy(object, paramsProxy);
};
