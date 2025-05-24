import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/marketing/promotion' };
    object.appendable = {
        except: ["promotionId", "promotionName", "shopsIds", "marketingZones", "newPriceSettings", "startDate", "endDate", "changeProductsToVisibleWhileStarting", "removeProductsAfterStockLevelRunsDown", "reduceBasingPrice", "calculationMethod", "removeAllPromotionElements"],
        arrayNode: "promotionElements",
        index: 0
    };
    object.arrays = ["shopsIds", "promotionElements"];
    return new Proxy(object, paramsProxy);
};
