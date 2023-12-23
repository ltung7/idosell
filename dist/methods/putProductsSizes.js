import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/products/sizes' }
    object.rootparams = true
    object.appendable = {
        except: ["mode","indexesData"],
        arrayNode: "sizesProductsData",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}