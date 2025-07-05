import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/clients' };
    object.req = ["priceListId", "clientsIds"];
    object.arrays = ["clientsIds"];
    return new Proxy(object, paramsProxy);
};
