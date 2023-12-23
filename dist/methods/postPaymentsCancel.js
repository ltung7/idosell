import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/payments/cancel' }
    return new Proxy(object, paramsProxy);
}