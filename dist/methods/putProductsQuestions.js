import { paramsProxy } from "../params.js";

export const putProductsQuestionsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/questions' }
    return new Proxy(object, paramsProxy);
}