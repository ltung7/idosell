import { paramsProxy } from "../params.js";

export const postProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products' }
    object.appendable = {
        except: ["settings","picturesSettings"],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}