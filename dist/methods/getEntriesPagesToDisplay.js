import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/entries/pagesToDisplay' };
    return new Proxy(object, paramsProxy);
};
