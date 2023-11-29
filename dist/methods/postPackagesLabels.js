import { paramsProxy } from "../params.js";

export const postPackagesLabelsProxy = (object) => {
    object.gate = { method: 'post', node: '/packages/labels' }
    return new Proxy(object, paramsProxy);
}