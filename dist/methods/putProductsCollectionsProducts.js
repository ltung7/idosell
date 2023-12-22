import { paramsProxy } from "../params.js";

export const putProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/collections/products' }
    object.rootparams = true
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}