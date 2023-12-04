import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export const getProductsMarketingZonesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/marketingZones' }
    object.custom = {
        ids: arrayOfObjects("products", "value", {"type":"id"}),
        externalCodes: arrayOfObjects("products", "value", {"type":"codeExtern"}),
        producerCodes: arrayOfObjects("products", "value", {"type":"codeProducer"})
    };
    return new Proxy(object, paramsProxy);
}