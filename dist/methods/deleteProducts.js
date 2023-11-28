import { paramsProxy } from "../params.js";

/**
 * Method used for deleting products from the IdoSell Shop administration panel.
 * @typedef {Object} DeleteProductsRequest
 * @property {(products: Array<Object>) => DeleteProductsRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsRequest} Method used for deleting products from the IdoSell Shop administration panel.
 */
export const deleteProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products/delete' }
    return new Proxy(object, paramsProxy);
}