import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/idBySizecode' }
    return new Proxy(object, paramsProxy);
}