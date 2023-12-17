import { paramsProxy } from "../params.js";

export const putClientsTagsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/tags' }
    object.appendable = {
        except: ["clientId"],
        arrayNode: "clientTags",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}