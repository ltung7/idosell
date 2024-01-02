import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/returns/returns' };
    object.appendable = {
        except: [],
        arrayNode: "returns",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}