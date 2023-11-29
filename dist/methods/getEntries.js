import { paramsProxy } from "../params.js";

export const getEntriesProxy = (object) => {
    object.gate = { method: 'get', node: '/entries/entries' }
    return new Proxy(object, paramsProxy);
}