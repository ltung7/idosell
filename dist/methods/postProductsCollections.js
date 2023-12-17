import { paramsProxy } from "../params.js";

export const postProductsCollectionsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/collections' }
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}