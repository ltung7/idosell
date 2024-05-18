import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/cpa/campaign' };
    return new Proxy(object, paramsProxy);
}