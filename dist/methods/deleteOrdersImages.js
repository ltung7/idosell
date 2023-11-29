import { paramsProxy } from "../params.js";

export const deleteOrdersImagesProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/images/delete' }
    return new Proxy(object, paramsProxy);
}