import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/codeExistence' };
    object.custom = {
        ids: arrayOfObjects("products", "productId", {"productIdentType":"id"}),
        externalCodes: arrayOfObjects("products", "productId", {"productIdentType":"codeExtern"}),
        producerCodes: arrayOfObjects("products", "productId", {"productIdentType":"codeProducer"}),
        deliverers: arrayOfObjects("products", "delivererId", {"productIdentType":"codeDeliverer"})
    };
    return new Proxy(object, paramsProxy);
}