import { paramsProxy } from "../params.js";

export const postProductsBundlesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/bundles/bundles' }
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}