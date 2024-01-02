import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/clients' };
    return new Proxy(object, paramsProxy);
}