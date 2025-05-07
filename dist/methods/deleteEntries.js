import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/entries/entries/delete' };
    return new Proxy(object, paramsProxy);
};
