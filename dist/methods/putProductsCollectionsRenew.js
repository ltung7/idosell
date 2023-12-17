import { paramsProxy } from "../params.js";

export const putProductsCollectionsRenewProxy = (object) => {
    object.gate = { method: 'put', node: '/products/collections/renew' }
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}