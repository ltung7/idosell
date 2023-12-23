import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/deliveryTime' }
    return new Proxy(object, paramsProxy);
}