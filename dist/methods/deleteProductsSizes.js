import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/products/sizes/delete' };
    object.rootparams = true
    object.appendable = {
        except: ["mode","deleteSizesIndexesData"],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}