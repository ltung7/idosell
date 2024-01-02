import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/warranties/warranties/delete' };
    return new Proxy(object, paramsProxy);
}