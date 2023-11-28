import { paramsProxy } from "../params.js";

/**
 * createBundle method allows to create a new product with a type: set and to assign existing products as a set components. Products added via this gate are hidden from the shop customer by default. To change the visibility of created products use the gate setProducts or set it on a product card in the shop administration panel
 * @typedef {Object} PostProductsBundlesBundlesRequest
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsBundlesBundlesRequest} createBundle method allows to create a new product with a type: set and to assign existing products as a set components. Products added via this gate are hidden from the shop customer by default. To change the visibility of created products use the gate setProducts or set it on a product card in the shop administration panel
 */
export const postProductsBundlesBundlesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/bundles' }
    return new Proxy(object, paramsProxy);
}