import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists' };
    object.req = ["priceListId"];
    return new Proxy(object, paramsProxy);
};
