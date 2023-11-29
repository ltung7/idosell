import { paramsProxy } from "../params.js";

export const getProductsMarketingZonesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/marketingZones' }
    return new Proxy(object, paramsProxy);
}