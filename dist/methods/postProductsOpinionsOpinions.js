import { paramsProxy } from "../params.js";

/**
 * The method allows for adding reviews of products available in the IdoSell Shop administration panel.
 * @typedef {Object} PostProductsOpinionsOpinionsRequest
 * @property {(opinions: Array<Object>) => PostProductsOpinionsOpinionsRequest} opinions List of reviews
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsOpinionsOpinionsRequest} The method allows for adding reviews of products available in the IdoSell Shop administration panel.
 */
export const postProductsOpinionsOpinionsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/opinions/opinions' }
    return new Proxy(object, paramsProxy);
}