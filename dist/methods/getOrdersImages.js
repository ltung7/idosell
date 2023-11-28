import { paramsProxy } from "../params.js";

/**
 * Method allows downloading image attachment data from the details of the specified order.
 * @typedef {Object} GetOrdersImagesRequest
 * @property {(imageId: Integer) => GetOrdersImagesRequest} imageId Attachment ID (Photos)
 * @property {(orderSerialNumber: Integer) => GetOrdersImagesRequest} orderSerialNumber Order serial number
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetOrdersImagesRequest} Method allows downloading image attachment data from the details of the specified order.
 */
export const getOrdersImagesProxy = (object) => {
    object.gate = { method: 'get', node: '/orders/images' }
    return new Proxy(object, paramsProxy);
}