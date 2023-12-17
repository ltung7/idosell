import { paramsProxy } from "../params.js";

export const putClientsPricesDiscountsProxy = (object) => {
    object.gate = { method: 'put', node: '/clients/prices/discounts' }
    object.appendable = {
        except: ["customers","discount_type","discount_operating"],
        arrayNode: "discount_parameters",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}