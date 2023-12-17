import { paramsProxy } from "../params.js";

export const putMenuProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/menu' }
    object.rootparams = true
    object.appendable = {
        except: ["settings"],
        arrayNode: "menu_list",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}