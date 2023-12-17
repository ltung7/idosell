import { paramsProxy } from "../params.js";

export const deleteProductsCollectionsProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections/products/delete' }
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}