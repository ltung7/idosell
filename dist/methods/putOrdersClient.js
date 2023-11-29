import { paramsProxy } from "../params.js";

export const putOrdersClientProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/client' }
    return new Proxy(object, paramsProxy);
}