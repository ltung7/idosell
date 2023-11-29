import { paramsProxy } from "../params.js";

export const putProductsDescriptionsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/descriptions' }
    return new Proxy(object, paramsProxy);
}