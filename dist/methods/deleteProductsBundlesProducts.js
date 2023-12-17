import { paramsProxy } from "../params.js";

export const deleteProductsBundlesProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/products/delete' }
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}