import { paramsProxy } from "../params.js";

/**
 * The method is used to generate shipments and printouts for the courier in orders, complaints and returns. When generating a label with a default courier configuration, it is not necessary to complete the shipment configuration options. To generate a custom label, you must additionally forward the shipment configuration options available to the courier in a given event (parcelParameters node). Completable configuration options can be checked using the getPackages method.
 * @typedef {Object} PostPackagesLabelsRequest
 * @property {(eventId: Integer) => PostPackagesLabelsRequest} eventId Id.
 * @property {(eventType: String) => PostPackagesLabelsRequest} eventType Type.
 * @property {(parcelParameters: Array<Object>) => PostPackagesLabelsRequest} parcelParameters Shipment configuration options available for a given courier
 * @property {(parcelParametersByPackages: Array<Object>) => PostPackagesLabelsRequest} parcelParametersByPackages Shipment configuration options available for Inpost Smile courier
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostPackagesLabelsRequest} The method is used to generate shipments and printouts for the courier in orders, complaints and returns. When generating a label with a default courier configuration, it is not necessary to complete the shipment configuration options. To generate a custom label, you must additionally forward the shipment configuration options available to the courier in a given event (parcelParameters node). Completable configuration options can be checked using the getPackages method.
 */
export const postPackagesLabelsProxy = (object) => {
    object.gate = { method: 'post', node: '/packages/labels' }
    return new Proxy(object, paramsProxy);
}