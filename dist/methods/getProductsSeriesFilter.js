import { paramsProxy } from "../params.js";

/**
 * Method allows you to retrieve a list of filters for a series of products available in the IdoSell administration panel..
 * @typedef {Object} GetProductsSeriesFilterRequest
 * @property {(shopId: Integer) => GetProductsSeriesFilterRequest} shopId Shop Id
 * @property {(languageId: String) => GetProductsSeriesFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(serieId: Integer) => GetProductsSeriesFilterRequest} serieId Series Id
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsSeriesFilterRequest} Method allows you to retrieve a list of filters for a series of products available in the IdoSell administration panel..
 */
export const getProductsSeriesFilterProxy = (object) => {
    object.gate = { method: 'get', node: '/products/series/filter' }
    return new Proxy(object, paramsProxy);
}