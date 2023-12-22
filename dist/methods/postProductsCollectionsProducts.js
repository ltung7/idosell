import { paramsProxy } from "../params.js";

export const postProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections/products' }
    object.rootparams = true
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}