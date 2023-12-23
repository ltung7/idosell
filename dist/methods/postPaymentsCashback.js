import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/payments/cashback' }
    return new Proxy(object, paramsProxy);
}