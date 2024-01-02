import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/warranties/warranties' };
    object.appendable = {
        except: [],
        arrayNode: "warranties",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}