import { paramsProxy } from "../params.js";

/**
 * The method is used to add products
 * @typedef {Object} PostProductsRequest
 * @property {(settings: Object) => PostProductsRequest} settings Settings
 * @property {(picturesSettings: Object) => PostProductsRequest} picturesSettings Icon and photos settings
 * @property {(products: Array<Object>) => PostProductsRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsRequest} The method is used to add products
 */
export const postProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products' }
    return new Proxy(object, paramsProxy);
}