import { paramsProxy } from "../params.js";
import { arrayOfObjects, page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/categoriesIdosell/search' };
    object.custom = {
        languages: arrayOfObjects("languagesIds", "languageId"),
        page
    };
    object.arrays = ["languagesIds", "categoriesIdoSellIds", "categoriesIdoSellNames", "categoriesIdoSellPaths"];
    return new Proxy(object, paramsProxy);
};
