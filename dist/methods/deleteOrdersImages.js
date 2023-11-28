import { paramsProxy } from "../params.js";

/**
 * Method allows to remove image attachments from the details of the specified order.
 * @typedef {Object} DeleteOrdersImagesRequest
 * @property {(order: Object) => DeleteOrdersImagesRequest} order 
 * @property {(images: Array<Object>) => DeleteOrdersImagesRequest} images List of attachment IDs to be removed from the details of the selected order
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteOrdersImagesRequest} Method allows to remove image attachments from the details of the specified order.
 */
export const deleteOrdersImagesProxy = (object) => {
    object.gate = { method: 'post', node: '/orders/images/delete' }
    return new Proxy(object, paramsProxy);
}