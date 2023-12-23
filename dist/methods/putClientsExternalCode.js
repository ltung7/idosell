import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/clients/externalCode' }
    return new Proxy(object, paramsProxy);
}