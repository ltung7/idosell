import { paramsProxy } from "../params.js";

/**
 * #!UmozliwiaDodanieRegionuDoWskazanegoKraju!#
 * @typedef {Object} PostDeliveriesRegionsRequest
 * @property {(regionName: String) => PostDeliveriesRegionsRequest} regionName Name of the region in the panel
 * @property {(shopId: Integer) => PostDeliveriesRegionsRequest} shopId Shop Id
 * @property {(postCodeFrom: String) => PostDeliveriesRegionsRequest} postCodeFrom The range of postal codes from %s
 * @property {(postCodeTo: String) => PostDeliveriesRegionsRequest} postCodeTo The range of postal codes to %s
 * @property {(parentRegionId: Integer) => PostDeliveriesRegionsRequest} parentRegionId ID of the country for which the region is being added
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostDeliveriesRegionsRequest} #!UmozliwiaDodanieRegionuDoWskazanegoKraju!#
 */
export const postDeliveriesRegionsProxy = (object) => {
    object.gate = { method: 'post', node: '/deliveries/regions' }
    return new Proxy(object, paramsProxy);
}