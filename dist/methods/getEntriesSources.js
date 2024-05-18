import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/entries/sources' };
    return new Proxy(object, paramsProxy);
}