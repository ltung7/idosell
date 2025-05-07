import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/shops/languages' };
    return new Proxy(object, paramsProxy);
};
