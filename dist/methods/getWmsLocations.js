import { paramsProxy } from "../params.js";

/**
 * The method allows to download information about a selected location or all locations in a given warehouse together with a list of product IDs located in these locations.
 * @typedef {Object} GetWmsLocationsRequest
 * @property {(locationId: Integer) => GetWmsLocationsRequest} locationId Warehouse location ID
 * @property {(locationCode: String) => GetWmsLocationsRequest} locationCode Storage location code
 * @property {(stockId: Integer) => GetWmsLocationsRequest} stockId Stock ID
 * @property {(returnElements: Array<String>) => GetWmsLocationsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned. Available values: locationName, locationPath, locationCode, stockId, products
 * @property {(resultsPage: Integer) => GetWmsLocationsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetWmsLocationsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetWmsLocationsRequest} The method allows to download information about a selected location or all locations in a given warehouse together with a list of product IDs located in these locations.
 */
export const getWmsLocationsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/locations' }
    return new Proxy(object, paramsProxy);
}