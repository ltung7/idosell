import { paramsProxy } from "../params.js";
import { setProductText } from "../helpers.js";

export const putProductsProxy = (object) => {
    object.gate = { method: 'put', node: '/products/products' }
    object.custom = {
        setText: setProductText(object)
    };
    object.appendable = {
        except: ["picturesSettings","settings"],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}