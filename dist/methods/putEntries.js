import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/entries/entries' };
    return new Proxy(object, paramsProxy);
}