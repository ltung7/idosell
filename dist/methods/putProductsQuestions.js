import { paramsProxy } from "../params.js";

/**
 * The method allows you to add and edit questions to products available in the IdoSell Shop administration panel.
 * @typedef {Object} PutProductsQuestionsRequest
 * @property {(questions: Array<Object>) => PutProductsQuestionsRequest} questions Question Board.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsQuestionsRequest} The method allows you to add and edit questions to products available in the IdoSell Shop administration panel.
 */
export const putProductsQuestionsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/questions' }
    return new Proxy(object, paramsProxy);
}