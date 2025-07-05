import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/brands/filter' };
    object.appendable = {
        except: ["shopId", "languageId", "producerId", "filterForNodeIsDefault"],
        arrayNode: "filtersActive",
        index: 0
    };
    object.req = ["producerId"];
    object.arrays = ["filtersActive"];
    return new Proxy(object, paramsProxy);
};
