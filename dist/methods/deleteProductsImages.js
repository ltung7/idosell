import { paramsProxy } from "../params.js";

/**
 * This method is used to delete images of products
 * @typedef {Object} DeleteProductsImagesRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsImagesRequest} This method is used to delete images of products
 */
export const deleteProductsImagesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/images/delete' }
    return new Proxy(object, paramsProxy);
}