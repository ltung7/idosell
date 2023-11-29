import { paramsProxy } from "../params.js";

export const getSystemShopsDataProxy = (object) => {
    object.gate = { method: 'get', node: '/system/shopsData' }
    return new Proxy(object, paramsProxy);
}