import { paramsProxy } from "../params.js";

export const postDeliveriesRegionsProxy = (object) => {
    object.gate = { method: 'post', node: '/deliveries/regions' }
    return new Proxy(object, paramsProxy);
}