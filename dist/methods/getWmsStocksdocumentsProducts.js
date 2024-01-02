import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/products' };
    object.custom = {
        page
    };
    object.snakeCase = true;
    return new Proxy(object, paramsProxy);
}