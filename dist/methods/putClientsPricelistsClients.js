import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/clients/pricelists/clients' };
    object.arrays = ["clientsIds"];
    return new Proxy(object, paramsProxy);
};
