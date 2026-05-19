import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/products' };
    object.custom = {
        page: (pageIndex, limit) => page(pageIndex, limit, true)
    };
    object.snakeCase = true;
    object.req = ["type", "id"];
    return new Proxy(object, paramsProxy);
};
