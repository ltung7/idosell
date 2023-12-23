import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/documents' }
    return new Proxy(object, paramsProxy);
}