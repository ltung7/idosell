import { paramsProxy } from "../params.js";

export const putProductsAttachmentsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/attachments' }
    return new Proxy(object, paramsProxy);
}