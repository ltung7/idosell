import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/wms/locations' };
    object.custom = {
        page
    };
    object.req = [{ "any": ["locationId", "stockId"] }];
    return new Proxy(object, paramsProxy);
};
