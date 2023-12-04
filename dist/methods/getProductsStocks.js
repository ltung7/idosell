import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export const getProductsStocksProxy = (object) => {
    object.gate = { method: 'get', node: '/products/stocks' }
    object.custom = {
        ids: arrayOfObjects("products", "value"),
        externalCodes: arrayOfObjects("products", "value", {"type":"codeExtern"}),
        producerCodes: arrayOfObjects("products", "value", {"type":"codeProducer"})
    };
    return new Proxy(object, paramsProxy);
}