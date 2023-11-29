import { paramsProxy } from "../params.js";

export const putEntriesProxy = (object) => {
    object.gate = { method: 'put', node: '/entries/entries' }
    return new Proxy(object, paramsProxy);
}