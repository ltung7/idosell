import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/products' };
    object.appendable = {
        except: ["type", "id"],
        arrayNode: "products",
        index: 0
    };
    object.req = ["type", "id", "product", "size", "quantity"];
    object.arrays = ["products"];
    return new Proxy(object, paramsProxy);
};
