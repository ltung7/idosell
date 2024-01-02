import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/sizes/sizes' };
    return new Proxy(object, paramsProxy);
}