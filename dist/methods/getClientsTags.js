import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/clients/tags' }
    return new Proxy(object, paramsProxy);
}