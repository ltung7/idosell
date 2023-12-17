import { paramsProxy } from "../params.js";

export const putProductsMarketingPromotionProxy = (object) => {
    object.gate = { method: 'put', node: '/products/marketing/promotion' }
    object.appendable = {
        except: ["promotionId","promotionName","shopsIds","marketingZones","newPriceSettings","startDate","endDate","changeProductsToVisibleWhileStarting","removeProductsAfterStockLevelRunsDown","reduceBasingPrice","calculationMethod","removeAllPromotionElements"],
        arrayNode: "promotionElements",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}