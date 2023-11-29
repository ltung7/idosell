import { paramsProxy } from "../params.js";

export const listOrdersUnfinishedProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/unfinished/get' }
    return new Proxy(object, paramsProxy);
}