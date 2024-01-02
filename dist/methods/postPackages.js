import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/packages/packages' };
    object.appendable = {
        except: [],
        arrayNode: "orderPackages",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}