import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/menu/filter' };
    object.appendable = {
        except: ["shopId", "languageId", "productMenuTreeId", "productMenuNodeId", "filterForMenuNodeIsDefault"],
        arrayNode: "menuFiltersActive",
        index: 0
    };
    object.req = ["shopId", "productMenuTreeId", "languageId", "productMenuNodeId"];
    object.arrays = ["menuFiltersActive"];
    return new Proxy(object, paramsProxy);
};
