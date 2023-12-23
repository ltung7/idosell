import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/brands/filter' }
    return new Proxy(object, paramsProxy);
}