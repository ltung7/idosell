import { paramsProxy } from "../params.js";
import { arrayOfObjects } from "../helpers.js";

export const getProductsReservationsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/reservations' }
    object.custom = {
        ids: arrayOfObjects("productsIdents", "value"),
        externalCodes: arrayOfObjects("productsIdents", "value", {"type":"codeExtern"}),
        producerCodes: arrayOfObjects("productsIdents", "value", {"type":"codeProducer"})
    };
    return new Proxy(object, paramsProxy);
}