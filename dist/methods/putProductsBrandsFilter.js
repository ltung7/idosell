import { paramsProxy } from "../params.js";

export const putProductsBrandsFilterProxy = (object) => {
    object.gate = { method: 'put', node: '/products/brands/filter' }
    object.appendable = {
        except: ["shopId","languageId","producerId","filterForNodeIsDefault"],
        arrayNode: "filtersActive",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}