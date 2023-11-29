import { paramsProxy } from "../params.js";

export const getProductsDescriptionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/descriptions' }
    return new Proxy(object, paramsProxy);
}