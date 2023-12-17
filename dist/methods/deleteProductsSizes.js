import { paramsProxy } from "../params.js";

export const deleteProductsSizesProxy = (object) => {
    object.gate = { method: 'post', node: '/products/sizes/delete' }
    object.appendable = {
        except: ["mode","deleteSizesIndexesData"],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}