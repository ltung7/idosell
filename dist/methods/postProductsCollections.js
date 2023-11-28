import { paramsProxy } from "../params.js";

/**
 * createCollection method allows to create a new product with a type: collection and to assign existing products as a collection components. Products added via this gate are hidden from the shop customer by default. To change the visibility of created products use the gate setProducts or set it on a product card in the shop administration panel
 * @typedef {Object} PostProductsCollectionsRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsCollectionsRequest} createCollection method allows to create a new product with a type: collection and to assign existing products as a collection components. Products added via this gate are hidden from the shop customer by default. To change the visibility of created products use the gate setProducts or set it on a product card in the shop administration panel
 */
export const postProductsCollectionsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections' }
    return new Proxy(object, paramsProxy);
}