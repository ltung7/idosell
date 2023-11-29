import { paramsProxy } from "../params.js";

export const getDeliveriesRegionsProxy = (object) => {
    object.gate = { method: 'get', node: '/deliveries/regions' }
    return new Proxy(object, paramsProxy);
}