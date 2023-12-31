import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/products/brands' };
    object.appendable = {
        except: [],
        arrayNode: "producers",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}