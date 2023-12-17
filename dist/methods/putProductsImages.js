import { paramsProxy } from "../params.js";

export const putProductsImagesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/images' }
    object.appendable = {
        except: ["productsImagesSettings"],
        arrayNode: "productsImages",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}