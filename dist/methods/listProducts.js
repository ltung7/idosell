import { dateRangeType } from "../helpers.js";
import { paramsProxy } from "../params.js";

export const listProductsProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products/get' }
    object.custom = {
        dates: dateRangeType([ 'productDate', 'productDateBegin', 'productDateEnd', 'productDateMode', 'added'], 'YYYY-MM-DD')
    }
    return new Proxy(object, paramsProxy);
}