import { paramsProxy } from "../params.js";

/**
 * The method allows existing units of measurement to be updated to the IdoSell administration panel.
 * @typedef {Object} PutSystemUnitsRequest
 * @property {(units: Array<Object>) => PutSystemUnitsRequest} units 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutSystemUnitsRequest} The method allows existing units of measurement to be updated to the IdoSell administration panel.
 */
export const putSystemUnitsProxy = (object) => {
    object.gate = { method: 'put', node: '/system/units' }
    return new Proxy(object, paramsProxy);
}