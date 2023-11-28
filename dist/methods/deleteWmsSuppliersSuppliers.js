import { paramsProxy } from "../params.js";

/**
 * The method allows for the removal of suppliers..
 * @typedef {Object} DeleteWmsSuppliersSuppliersRequest
 * @property {(ids: Array<Integer>) => DeleteWmsSuppliersSuppliersRequest} ids Id
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {DeleteWmsSuppliersSuppliersRequest} The method allows for the removal of suppliers..
 */
export const deleteWmsSuppliersSuppliersProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/suppliers/suppliers/delete' }
    return new Proxy(object, paramsProxy);
}