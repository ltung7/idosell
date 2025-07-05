import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/rejectMM' };
    object.req = ["id"];
    return new Proxy(object, paramsProxy);
};
