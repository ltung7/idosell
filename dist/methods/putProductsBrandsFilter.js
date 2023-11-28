import { paramsProxy } from "../params.js";

/**
 * The method allows you to manage filter settings for brands (manufacturers).
 * @typedef {Object} PutProductsBrandsFilterRequest
 * @property {(shopId: Integer) => PutProductsBrandsFilterRequest} shopId Shop Id
 * @property {(languageId: String) => PutProductsBrandsFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(producerId: Integer) => PutProductsBrandsFilterRequest} producerId Brand ID
 * @property {(filterForNodeIsDefault: String) => PutProductsBrandsFilterRequest} filterForNodeIsDefault 
 * @property {(filtersActive: Array<Object>) => PutProductsBrandsFilterRequest} filtersActive Active filters.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsBrandsFilterRequest} The method allows you to manage filter settings for brands (manufacturers).
 */
export const putProductsBrandsFilterProxy = (object) => {
    object.gate = { method: 'put', node: '/products/brands/filter' }
    return new Proxy(object, paramsProxy);
}