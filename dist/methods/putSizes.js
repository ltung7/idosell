import { paramsProxy } from "../params.js";

export const putSizesProxy = (object) => {
    object.gate = { method: 'put', node: '/sizes/sizes' }
    object.appendable = {
        except: [],
        arrayNode: "sizes",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}