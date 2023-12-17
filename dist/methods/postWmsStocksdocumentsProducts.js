import { paramsProxy } from "../params.js";

export const postWmsStocksdocumentsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/products' }
    object.appendable = {
        except: ["type","id"],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}