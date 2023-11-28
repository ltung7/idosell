import { paramsProxy } from "../params.js";

/**
 * The method allows you to add promotions from a new module with elements.
 * @typedef {Object} PostProductsMarketingPromotionRequest
 * @property {(promotionName: String) => PostProductsMarketingPromotionRequest} promotionName Promotion name
 * @property {(shopsIds: Array<Integer>) => PostProductsMarketingPromotionRequest} shopsIds List of stores IDs When mask is determined, this parameter is omitted.
 * @property {(marketingZones: Object) => PostProductsMarketingPromotionRequest} marketingZones Special zones
 * @property {(newPriceSettings: Object) => PostProductsMarketingPromotionRequest} newPriceSettings #!KonfiguracjaCenyPromocyjnej!#
 * @property {(startDate: String) => PostProductsMarketingPromotionRequest} startDate #!DataRozpoczeciaWFormacieYMDHIS!#
 * @property {(endDate: String) => PostProductsMarketingPromotionRequest} endDate #!DataZakonczeniaWFormacieYMDHIS!#
 * @property {(changeProductsToVisibleWhileStarting: String) => PostProductsMarketingPromotionRequest} changeProductsToVisibleWhileStarting Change the status of hidden products to visible while starting the special offer
 * @property {(removeProductsAfterStockLevelRunsDown: String) => PostProductsMarketingPromotionRequest} removeProductsAfterStockLevelRunsDown After running out of stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu) 
 * @property {(reduceBasingPrice: String) => PostProductsMarketingPromotionRequest} reduceBasingPrice #!ObnizNaPodstawieCenyNettoBrutto!#
 * @property {(calculationMethod: String) => PostProductsMarketingPromotionRequest} calculationMethod Price reduction calculation method
 * @property {(promotionElements: Array<Object>) => PostProductsMarketingPromotionRequest} promotionElements #!ElementyNaJakieMaDzialacPromocja!#
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsMarketingPromotionRequest} The method allows you to add promotions from a new module with elements.
 */
export const postProductsMarketingPromotionProxy = (object) => {
    object.gate = { method: 'post', node: '/products/marketing/promotion' }
    return new Proxy(object, paramsProxy);
}