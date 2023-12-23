import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/menu/filter' }
    return new Proxy(object, paramsProxy);
}