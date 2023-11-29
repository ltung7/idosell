import { paramsProxy } from "../params.js";

export const putWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/products' }
    return new Proxy(object, paramsProxy);
}