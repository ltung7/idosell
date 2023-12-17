import { paramsProxy } from "../params.js";

export const putProductsBundlesProductsQuantityProxy = (object) => {
    object.gate = { method: 'put', node: '/products/bundles/productsQuantity' }
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}