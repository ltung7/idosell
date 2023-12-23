import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/refunds/getPossibleAutoRefunds' }
    return new Proxy(object, paramsProxy);
}