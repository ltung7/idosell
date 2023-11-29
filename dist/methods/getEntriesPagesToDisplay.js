import { paramsProxy } from "../params.js";

export const getEntriesPagesToDisplayProxy = (object) => {
    object.gate = { method: 'get', node: '/entries/pagesToDisplay' }
    return new Proxy(object, paramsProxy);
}