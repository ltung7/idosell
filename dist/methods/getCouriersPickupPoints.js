import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/couriers/pickupPoints' };
    object.custom = {
        page
    };
    object.req = ["courierId"];
    return new Proxy(object, paramsProxy);
};
