import { paramsProxy } from "../params.js";

/**
 * The method allows you to download a list of filters for brands (manufacturers) available in the IdoSell administration panel.
 * @typedef {Object} GetProductsBrandsFilterRequest
 * @property {(shopId: Integer) => GetProductsBrandsFilterRequest} shopId Shop Id
 * @property {(languageId: String) => GetProductsBrandsFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(producerId: Integer) => GetProductsBrandsFilterRequest} producerId Brand ID
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsBrandsFilterRequest} The method allows you to download a list of filters for brands (manufacturers) available in the IdoSell administration panel.
 */
export const getProductsBrandsFilterProxy = (object) => {
    object.gate = { method: 'get', node: '/products/brands/filter' }
    return new Proxy(object, paramsProxy);
}