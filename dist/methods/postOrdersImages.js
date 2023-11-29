import { paramsProxy } from "../params.js";

export const postOrdersImagesProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/images' }
    return new Proxy(object, paramsProxy);
}