import { paramsProxy } from "../params.js";

export const putWmsStocksdocumentsAcceptMMProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/acceptMM' }
    return new Proxy(object, paramsProxy);
}