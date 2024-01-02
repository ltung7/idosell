import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/clients/profitPoints' };
    return new Proxy(object, paramsProxy);
}