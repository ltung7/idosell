import { paramsProxy } from "../params.js";

/**
 * It allows to download information about product reservations in orders (for up to 100 products in one request).
 * @typedef {Object} GetProductsReservationsRequest
 * @property {(productsIdents: Array<Object>) => GetProductsReservationsRequest} productsIdents Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetProductsReservationsRequest} It allows to download information about product reservations in orders (for up to 100 products in one request).
 */
export const getProductsReservationsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/reservations' }
    return new Proxy(object, paramsProxy);
}