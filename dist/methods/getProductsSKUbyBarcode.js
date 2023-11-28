import { paramsProxy } from "../params.js";

/**
 * The method allows to download, among others, information on identifiers, names and size codes, their available stock quantity and locations in the warehouse based on scanned bar codes.
 * @typedef {Object} GetProductsSKUbyBarcodeRequest
 * @property {(productIndices: Array<String>) => GetProductsSKUbyBarcodeRequest} productIndices List of sought products by indexes.
 * @property {(searchOnlyInCodeIai: Boolean) => GetProductsSKUbyBarcodeRequest} searchOnlyInCodeIai Search for products only by IAI code
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsSKUbyBarcodeRequest} The method allows to download, among others, information on identifiers, names and size codes, their available stock quantity and locations in the warehouse based on scanned bar codes.
 */
export const getProductsSKUbyBarcodeProxy = (object) => {
    object.gate = { method: 'get', node: '/products/SKUbyBarcode' }
    return new Proxy(object, paramsProxy);
}