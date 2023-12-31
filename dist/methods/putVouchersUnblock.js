import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'put', node: '/vouchers/unblock' };
    object.appendable = {
        except: [],
        arrayNode: "vouchers",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}