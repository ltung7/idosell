import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/products/opinions/opinions/delete' }
    return new Proxy(object, paramsProxy);
}