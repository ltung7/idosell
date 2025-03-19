import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'delete', node: '/responsibility/entities' };
    return new Proxy(object, paramsProxy);
}