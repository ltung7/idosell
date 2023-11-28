import { paramsProxy } from "../params.js";

/**
 * The method allows you to edit the promotion from the new module with the elements.
 * @typedef {Object} PutProductsMarketingPromotionRequest
 * @property {(promotionId: String) => PutProductsMarketingPromotionRequest} promotionId Special offer ID
 * @property {(promotionName: String) => PutProductsMarketingPromotionRequest} promotionName Promotion name
 * @property {(shopsIds: Array<Integer>) => PutProductsMarketingPromotionRequest} shopsIds List of stores IDs When mask is determined, this parameter is omitted.
 * @property {(marketingZones: Object) => PutProductsMarketingPromotionRequest} marketingZones Special zones
 * @property {(newPriceSettings: Object) => PutProductsMarketingPromotionRequest} newPriceSettings #!KonfiguracjaCenyPromocyjnej!#
 * @property {(startDate: String) => PutProductsMarketingPromotionRequest} startDate #!DataRozpoczeciaWFormacieYMDHIS!#
 * @property {(endDate: String) => PutProductsMarketingPromotionRequest} endDate #!DataZakonczeniaWFormacieYMDHIS!#
 * @property {(changeProductsToVisibleWhileStarting: String) => PutProductsMarketingPromotionRequest} changeProductsToVisibleWhileStarting Change the status of hidden products to visible while starting the special offer
 * @property {(removeProductsAfterStockLevelRunsDown: String) => PutProductsMarketingPromotionRequest} removeProductsAfterStockLevelRunsDown After running out of stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu) 
 * @property {(reduceBasingPrice: String) => PutProductsMarketingPromotionRequest} reduceBasingPrice #!ObnizNaPodstawieCenyNettoBrutto!#
 * @property {(calculationMethod: String) => PutProductsMarketingPromotionRequest} calculationMethod Price reduction calculation method
 * @property {(removeAllPromotionElements: String) => PutProductsMarketingPromotionRequest} removeAllPromotionElements #!OkreslaCzyUsunacWszystkieDotychczasoweElementyPromocji!#
 * @property {(promotionElements: Array<Object>) => PutProductsMarketingPromotionRequest} promotionElements #!ElementyNaJakieMaDzialacPromocja!#
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsMarketingPromotionRequest} The method allows you to edit the promotion from the new module with the elements.
 */
export const putProductsMarketingPromotionProxy = (object) => {
    object.gate = { method: 'put', node: '/products/marketing/promotion' }
    return new Proxy(object, paramsProxy);
}