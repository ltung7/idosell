import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/products/series' }
    object.appendable = {
        except: [],
        arrayNode: "series",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}