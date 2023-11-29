import { paramsProxy } from "../params.js";

export const postEntriesProxy = (object) => {
    object.gate = { method: 'post', node: '/entries/entries' }
    return new Proxy(object, paramsProxy);
}