import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/clients/tags/clear/delete' };
    return new Proxy(object, paramsProxy);
}