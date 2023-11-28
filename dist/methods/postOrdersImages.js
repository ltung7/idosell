import { paramsProxy } from "../params.js";

/**
 * Method allows to add image attachments to the details of the specified order.
 * @typedef {Object} PostOrdersImagesRequest
 * @property {(userName: String) => PostOrdersImagesRequest} userName Login
 * @property {(settings: Object) => PostOrdersImagesRequest} settings 
 * @property {(order: Object) => PostOrdersImagesRequest} order 
 * @property {(images: Array<Object>) => PostOrdersImagesRequest} images List of image attachments
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostOrdersImagesRequest} Method allows to add image attachments to the details of the specified order.
 */
export const postOrdersImagesProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/images' }
    return new Proxy(object, paramsProxy);
}