import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/stockQuantity' };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    };
    object.req = ["productSizeCodeExternal", "stockId"];
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
