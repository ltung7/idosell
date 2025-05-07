import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/menu/menu' };
    return new Proxy(object, paramsProxy);
};
