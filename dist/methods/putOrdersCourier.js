import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/orders/courier' }
    return new Proxy(object, paramsProxy);
}