import { paramsProxy } from "../params.js";

export const getPackagesLabelsProxy = (object) => {
    object.gate = { method: 'get', node: '/packages/labels' }
    return new Proxy(object, paramsProxy);
}