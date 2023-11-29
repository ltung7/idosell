import { paramsProxy } from "../params.js";

export const getWmsLocationsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/locations' }
    return new Proxy(object, paramsProxy);
}