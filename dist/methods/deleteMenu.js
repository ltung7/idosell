import { paramsProxy } from "../params.js";

export const deleteMenuProxy = (object) => {
    object.gate = { method: 'post', node: '/menu/menu/delete' }
    object.rootparams = true
    object.appendable = {
        except: ["settings"],
        arrayNode: "menu_list",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}