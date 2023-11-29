import { paramsProxy } from "../params.js";

export const putSizesProxy = (object) => {
    object.gate = { method: 'put', node: '/sizes/sizes' }
    return new Proxy(object, paramsProxy);
}