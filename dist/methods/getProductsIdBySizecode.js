import { paramsProxy } from "../params.js";

/**
 * Method that returns information about product IDs, as well as size IDs and names, based on the provided product external system codes.
 * @typedef {Object} GetProductsIdBySizecodeRequest
 * @property {(codes: Array<String>) => GetProductsIdBySizecodeRequest} codes Search codes.
 * @property {(type: String) => GetProductsIdBySizecodeRequest} type Type of codes. Acceptable values: "external" (default value) - external system code, "producer" - producer code, and "all" - any of the above codes
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsIdBySizecodeRequest} Method that returns information about product IDs, as well as size IDs and names, based on the provided product external system codes.
 */
export const getProductsIdBySizecodeProxy = (object) => {
    object.gate = { method: 'get', node: '/products/idBySizecode' }
    return new Proxy(object, paramsProxy);
}