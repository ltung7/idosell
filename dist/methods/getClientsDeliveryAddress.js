import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/clients/deliveryAddress' };
    return new Proxy(object, paramsProxy);
}