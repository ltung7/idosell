import { paramsProxy } from "../params.js";
import { setProductText, modifyPrice } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/products' };
    object.custom = {
        setText: setProductText(object),
        setPrice: (value, type = "retail", net = false) => modifyPrice(value, type, net, "amount_set")
    };
    object.appendable = {
        except: ["settings", "picturesSettings"],
        arrayNode: "products",
        index: 0
    };
    object.req = ["shopsMask"];
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
