import { paramsProxy } from "../params.js";

export const postProductsBundlesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/bundles' }
    return new Proxy(object, paramsProxy);
}