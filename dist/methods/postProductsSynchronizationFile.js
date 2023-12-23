import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/products/synchronization/file' }
    return new Proxy(object, paramsProxy);
}