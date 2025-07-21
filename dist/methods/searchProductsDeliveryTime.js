import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/deliveryTime/search' };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    object.req = [(object) => ((object.productId && object.sizeId) || object.productIndex) ? false : 'productId + sizeId or productIndex'];
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
