import { paramsProxy } from "../params.js";

export const postClientsTagsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/tags' }
    object.rootparams = true
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}