import { paramsProxy } from "../params.js";

export const deleteProductsImagesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/images/delete' }
    return new Proxy(object, paramsProxy);
}