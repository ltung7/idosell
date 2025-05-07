import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/returns/serialNumber' };
    object.appendable = {
        except: ["return_id"],
        arrayNode: "products",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
