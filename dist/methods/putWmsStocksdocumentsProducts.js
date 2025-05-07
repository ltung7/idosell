import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/products' };
    object.appendable = {
        except: ["type", "id"],
        arrayNode: "products",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
