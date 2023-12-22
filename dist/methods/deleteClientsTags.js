import { paramsProxy } from "../params.js";

export const deleteClientsTagsProxy = (object) => {
    object.gate = { method: 'post', node: '/clients/tags/delete' }
    object.rootparams = true
    object.appendable = {
        except: [],
        arrayNode: "params",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}