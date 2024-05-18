import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/config/variables' };
    return new Proxy(object, paramsProxy);
}