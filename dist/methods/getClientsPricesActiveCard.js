import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/clients/prices/activeCard' }
    return new Proxy(object, paramsProxy);
}