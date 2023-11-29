import { paramsProxy } from "../params.js";

export const deleteProductsParametersProxy = (object) => {
    object.gate = { method: 'post', node: '/products/parameters/delete' }
    return new Proxy(object, paramsProxy);
}