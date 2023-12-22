import { paramsProxy } from "../params.js";

export const putMenuFilterProxy = (object) => {
    object.gate = { method: 'put', node: '/menu/filter' }
    object.appendable = {
        except: ["shopId","languageId","productMenuTreeId","productMenuNodeId","filterForMenuNodeIsDefault"],
        arrayNode: "menuFiltersActive",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}