import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/snippets/snippets' };
    return new Proxy(object, paramsProxy);
}