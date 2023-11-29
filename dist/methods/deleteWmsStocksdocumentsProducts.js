import { paramsProxy } from "../params.js";

export const deleteWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/products/delete' }
    return new Proxy(object, paramsProxy);
}