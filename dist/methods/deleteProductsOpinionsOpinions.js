import { paramsProxy } from "../params.js";

/**
 * The method allows to delete the feedback about the commodity from the panel.
 * @typedef {Object} DeleteProductsOpinionsOpinionsRequest
 * @property {(id: Integer) => DeleteProductsOpinionsOpinionsRequest} id 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteProductsOpinionsOpinionsRequest} The method allows to delete the feedback about the commodity from the panel.
 */
export const deleteProductsOpinionsOpinionsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/opinions/opinions/delete' }
    return new Proxy(object, paramsProxy);
}