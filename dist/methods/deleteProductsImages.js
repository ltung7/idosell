import { paramsProxy } from "../params.js";

export const deleteProductsImagesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/images/delete' }
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}