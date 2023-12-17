import { paramsProxy } from "../params.js";

export const postProductsBrandsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/brands' }
    object.appendable = {
        except: [],
        arrayNode: "producers",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}