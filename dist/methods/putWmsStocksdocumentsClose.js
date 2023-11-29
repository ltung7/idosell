import { paramsProxy } from "../params.js";

export const putWmsStocksdocumentsCloseProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/close' }
    return new Proxy(object, paramsProxy);
}