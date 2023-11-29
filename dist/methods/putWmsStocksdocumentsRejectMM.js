import { paramsProxy } from "../params.js";

export const putWmsStocksdocumentsRejectMMProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/rejectMM' }
    return new Proxy(object, paramsProxy);
}