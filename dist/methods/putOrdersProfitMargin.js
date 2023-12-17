import { paramsProxy } from "../params.js";

export const putOrdersProfitMarginProxy = (object) => {
    object.gate = { method: 'put', node: '/orders/profitMargin' }
    object.appendable = {
        except: [],
        arrayNode: "orders",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}