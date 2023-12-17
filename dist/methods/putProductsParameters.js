import { paramsProxy } from "../params.js";

export const putProductsParametersProxy = (object) => {
    object.gate = { method: 'put', node: '/products/parameters' }
    object.rootparams = true
    object.appendable = {
        except: ["settings"],
        arrayNode: "items",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}