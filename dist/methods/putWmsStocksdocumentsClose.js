import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/close' };
    return new Proxy(object, paramsProxy);
}