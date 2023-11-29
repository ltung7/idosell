import { paramsProxy } from "../params.js";

export const putOrdersDevideProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/devide' }
    return new Proxy(object, paramsProxy);
}