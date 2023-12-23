import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/sizes' }
    object.custom = {
        page: (page = 0, limit = null) => ({ "result::page": page, "result::pageNumber":limit??100 })
    };
    return new Proxy(object, paramsProxy);
}