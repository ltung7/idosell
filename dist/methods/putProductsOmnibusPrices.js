import { paramsProxy } from "../params.js";

export const putProductsOmnibusPricesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/omnibusPrices' }
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}