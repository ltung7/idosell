import { paramsProxy } from "../params.js";

/**
 * Method that enables editing and adding new products to the administration panel.
 * @typedef {Object} PutProductsRequest
 * @property {(settings: Object) => PutProductsRequest} settings Settings
 * @property {(picturesSettings: Object) => PutProductsRequest} picturesSettings Icon and photos settings
 * @property {(products: Array<Object>) => PutProductsRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsRequest} Method that enables editing and adding new products to the administration panel.
 */
export const putProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/products' }
    return new Proxy(object, paramsProxy);
}