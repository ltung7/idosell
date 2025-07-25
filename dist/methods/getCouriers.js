import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/couriers/couriers' };
    object.custom = {
        page
    };
    object.req = ["countryCode"];
    return new Proxy(object, paramsProxy);
};
