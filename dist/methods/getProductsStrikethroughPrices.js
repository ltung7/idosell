import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export const getProductsStrikethroughPricesProxy = (object) => {
    object.gate = { method: 'get', node: '/products/strikethroughPrices' }
    object.custom = {
        ids: arrayOfObjects("products", "value"),
        externalCodes: arrayOfObjects("products", "value", {"type":"codeExtern"}),
        producerCodes: arrayOfObjects("products", "value", {"type":"codeProducer"})
    };
    return new Proxy(object, paramsProxy);
}