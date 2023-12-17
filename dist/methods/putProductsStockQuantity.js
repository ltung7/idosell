import { paramsProxy } from "../params.js";

export const putProductsStockQuantityProxy = (object) => {
    object.gate = { method: 'put', node: '/products/stockQuantity' }
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}