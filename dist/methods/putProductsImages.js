import { paramsProxy } from "../params.js";

/**
 * Method used for adding and editing product pictures.
 * @typedef {Object} PutProductsImagesRequest
 * @property {(productsImagesSettings: Object) => PutProductsImagesRequest} productsImagesSettings 
 * @property {(productsImages: Array<Object>) => PutProductsImagesRequest} productsImages Information on product images
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsImagesRequest} Method used for adding and editing product pictures.
 */
export const putProductsImagesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/images' }
    return new Proxy(object, paramsProxy);
}