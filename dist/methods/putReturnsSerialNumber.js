import { paramsProxy } from "../params.js";

/**
 * Method that enables setting serial numbers for products included in returns issued for orders in the administration panel.
 * @typedef {Object} PutReturnsSerialNumberRequest
 * @property {(return_id: Integer) => PutReturnsSerialNumberRequest} return_id Return number.
 * @property {(products: Array<Object>) => PutReturnsSerialNumberRequest} products Products list.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutReturnsSerialNumberRequest} Method that enables setting serial numbers for products included in returns issued for orders in the administration panel.
 */
export const putReturnsSerialNumberProxy = (object) => {
    object.gate = { method: 'put', node: '/returns/serialNumber' }
    return new Proxy(object, paramsProxy);
}