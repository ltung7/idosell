import { paramsProxy } from "../params.js";
import { page } from "../helpers.js";

export const getWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'get', node: '/wms/stocksdocuments/products' }
    object.custom = {
        page: page(false)
    };
    return new Proxy(object, paramsProxy);
}