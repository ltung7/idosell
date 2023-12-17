import { paramsProxy } from "../params.js";

export const putProductsStocksProxy = (object) => {
    object.gate = { method: 'put', node: '/products/stocks' }
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}