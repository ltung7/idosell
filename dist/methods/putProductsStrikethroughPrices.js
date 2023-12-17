import { paramsProxy } from "../params.js";

export const putProductsStrikethroughPricesProxy = (object) => {
    object.gate = { method: 'put', node: '/products/strikethroughPrices' }
    object.appendable = {
        except: [],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}