import { paramsProxy } from "../params.js";

/**
 * Evaluation of the usefulness of opinions issued for products.
 * @typedef {Object} GetProductsOpinionsRateRequest
 * @property {(id: Integer) => GetProductsOpinionsRateRequest} id 
 * @property {(operation: String) => GetProductsOpinionsRateRequest} operation 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsOpinionsRateRequest} Evaluation of the usefulness of opinions issued for products.
 */
export const getProductsOpinionsRateProxy = (object) => {
    object.gate = { method: 'get', node: '/products/opinions/rate' }
    return new Proxy(object, paramsProxy);
}