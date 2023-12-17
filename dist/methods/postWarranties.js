import { paramsProxy } from "../params.js";

export const postWarrantiesProxy = (object) => {
    object.gate = { method: 'post', node: '/warranties/warranties' }
    object.appendable = {
        except: [],
        arrayNode: "warranties",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}