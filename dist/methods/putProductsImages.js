import { paramsProxy } from "../params.js";

export const putProductsImagesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/images' }
    return new Proxy(object, paramsProxy);
}