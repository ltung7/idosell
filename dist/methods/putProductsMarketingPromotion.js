import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/marketing/promotion' };
    object.auth.version = 7;
    object.appendable = {
        except: ["promotionId", "promotionName", "shopsIds", "marketingZones", "newPriceSettings", "startDate", "endDate", "changeProductsToVisibleWhileStarting", "removeProductsAfterStockLevelRunsDown", "reduceBasingPrice", "calculationMethod", "removeAllPromotionElements"],
        arrayNode: "promotionElements",
        index: 0
    };
    object.req = ["promotionId"];
    object.arrays = ["shopsIds", "promotionElements"];
    return new Proxy(object, paramsProxy);
};
