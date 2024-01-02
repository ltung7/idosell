import { paramsProxy } from "../params.js";

export default (object) => {
    object.gate = { method: 'post', node: '/menu/menu/delete' };
    object.rootparams = true
    object.appendable = {
        except: ["settings"],
        arrayNode: "menu_list",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}