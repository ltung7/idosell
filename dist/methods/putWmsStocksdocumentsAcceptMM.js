import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/acceptMM' };
    object.req = ["id"];
    return new Proxy(object, paramsProxy);
};
