import { paramsProxy } from "../params.js";

/**
 * The method allows you to manage the filter settings for the series..
 * @typedef {Object} PutProductsSeriesFilterRequest
 * @property {(shopId: Integer) => PutProductsSeriesFilterRequest} shopId Shop Id
 * @property {(languageId: String) => PutProductsSeriesFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(serieId: Integer) => PutProductsSeriesFilterRequest} serieId Series Id
 * @property {(filterForNodeIsDefault: String) => PutProductsSeriesFilterRequest} filterForNodeIsDefault 
 * @property {(filtersActive: Array<Object>) => PutProductsSeriesFilterRequest} filtersActive Active filters.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsSeriesFilterRequest} The method allows you to manage the filter settings for the series..
 */
export const putProductsSeriesFilterProxy = (object) => {
    object.gate = { method: 'put', node: '/products/series/filter' }
    return new Proxy(object, paramsProxy);
}