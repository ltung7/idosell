import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/snippets/campaign' };
    return new Proxy(object, paramsProxy);
}