import { paramsProxy } from "../params.js";

export const postPackagesLabelsProxy = (object) => {
    object.gate = { method: 'post', node: '/packages/labels' }
    object.appendable = {
        except: ["eventId","eventType","parcelParameters"],
        arrayNode: "parcelParametersByPackages",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}