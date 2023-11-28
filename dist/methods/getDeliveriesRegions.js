import { paramsProxy } from "../params.js";

/**
 * The method allows to download a list of regions supporting deliveries.
 * @typedef {Object} GetDeliveriesRegionsRequest
 * @property {(shopId: Integer) => GetDeliveriesRegionsRequest} shopId Shop Id
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetDeliveriesRegionsRequest} The method allows to download a list of regions supporting deliveries.
 */
export const getDeliveriesRegionsProxy = (object) => {
    object.gate = { method: 'get', node: '/deliveries/regions' }
    return new Proxy(object, paramsProxy);
}