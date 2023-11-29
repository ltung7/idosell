import { paramsProxy } from "../params.js";

export const getSizesProxy = (object) => {
    object.gate = { method: 'get', node: '/sizes/sizes' }
    return new Proxy(object, paramsProxy);
}