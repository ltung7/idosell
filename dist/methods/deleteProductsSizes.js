import { paramsProxy } from "../params.js";

export const deleteProductsSizesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/sizes/delete' }
    return new Proxy(object, paramsProxy);
}