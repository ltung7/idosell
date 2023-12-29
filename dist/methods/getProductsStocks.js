import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/stocks' }
    object.custom = {
        ids: arrayOfObjects("products", "identValue", {"identType":"id"}),
        externalCodes: arrayOfObjects("products", "identValue", {"identType":"codeExtern"}),
        producerCodes: arrayOfObjects("products", "identValue", {"identType":"codeProducer"})
    };
    return new Proxy(object, paramsProxy);
}