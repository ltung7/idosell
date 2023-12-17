import { paramsProxy } from "../params.js";

export const putProductsSupplierProductDataProxy = (object) => {
    object.gate = { method: 'put', node: '/products/supplierProductData' }
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}