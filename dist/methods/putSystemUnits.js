import { paramsProxy } from "../params.js";

export const putSystemUnitsProxy = (object) => {
    object.gate = { method: 'put', node: '/system/units' }
    object.appendable = {
        except: [],
        arrayNode: "units",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}