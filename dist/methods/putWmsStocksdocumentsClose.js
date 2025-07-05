import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/close' };
    object.req = ["type", "id"];
    return new Proxy(object, paramsProxy);
};
