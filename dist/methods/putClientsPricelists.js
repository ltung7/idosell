import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists' };
    return new Proxy(object, paramsProxy);
}