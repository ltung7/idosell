import { paramsProxy } from "../params.js";
import { arrayOfObjects, page } from "../helpers.js";

export const getProductsCategoriesIdosellProxy = (object) => {
    object.gate = { method: 'get', node: '/products/categoriesIdosell' }
    object.custom = {
        languages: arrayOfObjects("languagesIds", "languageId"),
        page
    };
    return new Proxy(object, paramsProxy);
}