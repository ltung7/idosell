import { paramsProxy } from "../params.js";

export const postWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/products' }
    return new Proxy(object, paramsProxy);
}