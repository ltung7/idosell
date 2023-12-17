import { paramsProxy } from "../params.js";

export const putMenuSortProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/sort' }
    object.rootparams = true
    object.appendable = {
        except: ["settings"],
        arrayNode: "menu_list",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}