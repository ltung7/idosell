import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/sizes' };
    return new Proxy(object, paramsProxy);
};
