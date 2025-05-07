import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/series/filter' };
    object.appendable = {
        except: ["shopId", "languageId", "serieId", "filterForNodeIsDefault"],
        arrayNode: "filtersActive",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
