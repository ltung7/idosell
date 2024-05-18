import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'delete', node: '/cpa/campaign' };
    return new Proxy(object, paramsProxy);
}