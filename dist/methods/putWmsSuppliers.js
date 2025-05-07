import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/wms/suppliers/suppliers' };
    object.appendable = {
        except: [],
        arrayNode: "suppliers",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
