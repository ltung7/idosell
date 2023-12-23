import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/rename' }
    return new Proxy(object, paramsProxy);
}