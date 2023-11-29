import { paramsProxy } from "../params.js";

export const getOrdersImagesProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/images' }
    return new Proxy(object, paramsProxy);
}