import { paramsProxy } from "../params.js";

/**
 * Method that enables adding and editing product attachments.
 * @typedef {Object} PutProductsAttachmentsRequest
 * @property {(productsAttachments: Array<Object>) => PutProductsAttachmentsRequest} productsAttachments 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsAttachmentsRequest} Method that enables adding and editing product attachments.
 */
export const putProductsAttachmentsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/attachments' }
    return new Proxy(object, paramsProxy);
}