import { paramsProxy } from "../params.js";

/**
 * The method allows information about suppliers to be updated, including address details, description, order preparation time or supplier working hours..
 * @typedef {Object} PutWmsSuppliersSuppliersRequest
 * @property {(suppliers: Array<Object>) => PutWmsSuppliersSuppliersRequest} suppliers 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutWmsSuppliersSuppliersRequest} The method allows information about suppliers to be updated, including address details, description, order preparation time or supplier working hours..
 */
export const putWmsSuppliersSuppliersProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/suppliers/suppliers' }
    return new Proxy(object, paramsProxy);
}