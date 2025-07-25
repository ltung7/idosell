import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/products/marketing/promotion' };
    object.appendable = {
        except: ["promotionName", "shopsIds", "marketingZones", "newPriceSettings", "startDate", "endDate", "changeProductsToVisibleWhileStarting", "removeProductsAfterStockLevelRunsDown", "reduceBasingPrice", "calculationMethod"],
        arrayNode: "promotionElements",
        index: 0
    };
    object.req = ["promotionName", "shopsIds", "marketingZones"];
    object.arrays = ["shopsIds", "promotionElements"];
    return new Proxy(object, paramsProxy);
};
