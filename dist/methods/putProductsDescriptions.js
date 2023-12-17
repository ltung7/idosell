import { paramsProxy } from "../params.js";

export const putProductsDescriptionsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/descriptions' }
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}