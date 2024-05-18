import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/snippets/cookies' };
    return new Proxy(object, paramsProxy);
}