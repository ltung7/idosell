import { paramsProxy } from "../params.js";

/**
 * The method allows you to download a list of questions to products available in the IdoSell Shop administration panel.
 * @typedef {Object} GetProductsQuestionsRequest
 * @property {(id: Integer) => GetProductsQuestionsRequest} id Question ID.
 * @property {(productId: Integer) => GetProductsQuestionsRequest} productId Product IAI code
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsQuestionsRequest} The method allows you to download a list of questions to products available in the IdoSell Shop administration panel.
 */
export const getProductsQuestionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/questions' }
    return new Proxy(object, paramsProxy);
}