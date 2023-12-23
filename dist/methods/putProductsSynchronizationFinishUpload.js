import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/products/synchronization/finishUpload' }
    return new Proxy(object, paramsProxy);
}