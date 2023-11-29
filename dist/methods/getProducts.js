import { dateRangeType } from "../helpers.js";
import { paramsProxy } from "../params.js";

export const getProductsProxy = (object) => {
    object.gate = { method: 'get', node: '/products/products' }
    object.custom = {
        dates: dateRangeType([ 'productDate', 'productDateBegin', 'productDateEnd', 'productDateMode', 'added'], 'YYYY-MM-DD')
    }
    return new Proxy(object, paramsProxy);
}