import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/snippets/snippets' };
    return new Proxy(object, paramsProxy);
}