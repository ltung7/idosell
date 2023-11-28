import { paramsProxy } from "../params.js";

/**
 * The method allows to add TIFF, BMP, PNG, JPG, JPEG, GIF or PDF documents to the order in the IdoSell Shop administration panel.
 * @typedef {Object} PostOrdersDocumentsRequest
 * @property {(documents: Array<Object>) => PostOrdersDocumentsRequest} documents List of documents.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostOrdersDocumentsRequest} The method allows to add TIFF, BMP, PNG, JPG, JPEG, GIF or PDF documents to the order in the IdoSell Shop administration panel.
 */
export const postOrdersDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/documents' }
    return new Proxy(object, paramsProxy);
}