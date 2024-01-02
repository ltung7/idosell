import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/reservations' };
    object.custom = {
        ids: arrayOfObjects("productsIdents", "identValue", {"identType":"id"}),
        externalCodes: arrayOfObjects("productsIdents", "identValue", {"identType":"codeExtern"}),
        producerCodes: arrayOfObjects("productsIdents", "identValue", {"identType":"codeProducer"})
    };
    return new Proxy(object, paramsProxy);
}