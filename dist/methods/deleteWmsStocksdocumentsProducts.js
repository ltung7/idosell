import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/products/delete' };
    object.appendable = {
        except: ["type","id"],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}