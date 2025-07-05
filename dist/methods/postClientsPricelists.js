import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/clients/pricelists' };
    object.req = ["priceListName"];
    return new Proxy(object, paramsProxy);
};
