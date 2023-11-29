import { paramsProxy } from "../params.js";

export const getProductsCodeExistenceProxy = (object) => {
    object.gate = { method: 'get', node: '/products/codeExistence' }
    return new Proxy(object, paramsProxy);
}