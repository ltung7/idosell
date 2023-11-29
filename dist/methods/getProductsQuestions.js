import { paramsProxy } from "../params.js";

export const getProductsQuestionsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/questions' }
    return new Proxy(object, paramsProxy);
}