import { paramsProxy } from "../params.js";

export const putProductsMarketingZonesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/marketingZones' }
    return new Proxy(object, paramsProxy);
}