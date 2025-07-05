import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/documents' };
    object.req = ["type", "stockId"];
    return new Proxy(object, paramsProxy);
};
