import { paramsProxy } from "../params.js";

export const postProductsBundlesProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/products' }
    object.rootparams = true
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}