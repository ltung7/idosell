import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/clients/clients' };
    object.appendable = {
        except: [],
        arrayNode: "clients",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}