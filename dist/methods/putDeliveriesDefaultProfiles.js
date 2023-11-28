import { paramsProxy } from "../params.js";

/**
 * The method allows to set the default delivery profile for the given region.
 * @typedef {Object} PutDeliveriesDefaultProfilesRequest
 * @property {(regionId: Integer) => PutDeliveriesDefaultProfilesRequest} regionId Country ID
 * @property {(shopId: Integer) => PutDeliveriesDefaultProfilesRequest} shopId Shop Id
 * @property {(retailProfileId: Integer) => PutDeliveriesDefaultProfilesRequest} retailProfileId ID of delivery profile for retail sales 
 * @property {(wholesaleProfileId: Integer) => PutDeliveriesDefaultProfilesRequest} wholesaleProfileId ID of delivery profile for wholesale sales 
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutDeliveriesDefaultProfilesRequest} The method allows to set the default delivery profile for the given region.
 */
export const putDeliveriesDefaultProfilesProxy = (object) => {
    object.gate = { method: 'put', node: '/deliveries/defaultProfiles' }
    return new Proxy(object, paramsProxy);
}