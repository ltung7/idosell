import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/products/supplierCode' };
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}