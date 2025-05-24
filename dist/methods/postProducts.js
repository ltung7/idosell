import { paramsProxy } from "../params.js";
import { setProductText, modifyPrice } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/products' };
    object.custom = {
        setText: setProductText(object),
        addPrice: (value, type = "retail", net = false) => modifyPrice(value, type, net, "amount_diff"),
        setPrice: (value, type = "retail", net = false) => modifyPrice(value, type, net, "amount_set")
    };
    object.appendable = {
        except: ["settings", "picturesSettings"],
        arrayNode: "products",
        index: 0
    };
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
