import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/cpa/cpa' };
    return new Proxy(object, paramsProxy);
}