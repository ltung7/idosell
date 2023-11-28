import { paramsProxy } from "../params.js";

/**
 * Method that enables extracting information about non-deleted products available in the administration panel
 * @typedef {Object} PostProductsGetRequest
 * @property {(dispatchSettings: Object) => PostProductsGetRequest} dispatchSettings 
 * @property {(returnProducts: String) => PostProductsGetRequest} returnProducts Element determines which products should be returned by the gate. Undeleted products are returned by default. Available values: "active" - undeleted products, "deleted" - deleted products. "in_trash" - products in the trash.
 * @property {(returnElements: Array<String>) => PostProductsGetRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned Available values: * lang_data * adding_time, * deleted, * code, * note, * taxcode, * inwrapper, * sellby_retail, * sellby_wholesale, * producer_id, * producer_name, * iaiCategoryId, * iaiCategoryName, * iaiCategoryPath, * category_id, * category_name, * size_group_id, * modification_time, * currency, * currency_shop, * bestseller, * new_product, * retail_price, * wholesale_price, * minimal_price, * automatic_calculation_price, * pos_price, * strikethrough_retail_price, * strikethrough_wholesale_price, * last_purchase_price, * purchase_price_net_average, * purchase_price_net_last, * purchase_price_gross_average, * purchase_price_gross_last, * vat, * vat_free, * rebate, * hotspots_zones, * profit_points, * points, * weight, * export_to_pricecomparers, * export_to_amazon_marketplace, * enable_in_pos, * complex_notes, * available_profile, * traits, * parameters, * version_data, * advance, * promotion, * discount, * distinguished, * special, * visible, * persistent, * priority, * shops_mask, * icon, * icon_for_auctions, * icon_for_group, * pictures, * unit, * warranty, * series, * products_associated, * shops, * quantities, * sizes_attributes, * shops_attributes, * auction_prices, * price_comparers_prices, * deliverer, * sizes, * size_group_name, * pictures_count, * product_type, * price_changed_time, * quantity_changed_time, * deliverer_name, * available_profile_name, * availability_management_type, * sum_in_basket, * menu, * auction_settings, * bundle, * sizeschart_id, * sizeschart_name, * serialnumbers, * producer_codes_standard, * javaScriptInTheItemCard, * productAuctionDescriptionsData, * priceFormula, * productIndividualDescriptionsData, * productIndividualUrlsData, * productServicesDescriptionsData, * cnTaricCode, * productIsGratis, * dimensions
 * @property {(productIsAvailable: String) => PostProductsGetRequest} productIsAvailable Product availability. Available values: "y" - available, "n" - unavailable.
 * @property {(productIsVisible: String) => PostProductsGetRequest} productIsVisible Product visibility in store Available values: "y" - Visible, "n" - Invisible.
 * @property {(productVersionId: Integer) => PostProductsGetRequest} productVersionId Product group ID
 * @property {(productInPromotion: String) => PostProductsGetRequest} productInPromotion Promoted product. Available values: "y" - promoted, "n" - not promoted.
 * @property {(productInDiscount: String) => PostProductsGetRequest} productInDiscount Product on sale. Available values: "y" - on sale, "n" - not on sale.
 * @property {(productInDistinguished: String) => PostProductsGetRequest} productInDistinguished Distinguished product. Available values: "y" - distinguished, "n" - not distinguished.
 * @property {(productInSpecial: String) => PostProductsGetRequest} productInSpecial Special product. Available values: "y" - #!specjalny!#, "n" - not special.
 * @property {(productInForPointsSelling: String) => PostProductsGetRequest} productInForPointsSelling Product available for points. Available values: "y" - Available for points, "n" - Unavailable for points.
 * @property {(productIsObservedByClients: String) => PostProductsGetRequest} productIsObservedByClients Observed product. Available values: "Y" - observed, "n" - not observed.
 * @property {(skipDefaultProduct: String) => PostProductsGetRequest} skipDefaultProduct Element determines if default product (with 0 ID, contains settings of newly added products) should be omitted Available values: "y" - omits default product, "n" - allows to download default product.
 * @property {(showPromotionsPrices: String) => PostProductsGetRequest} showPromotionsPrices The item specifies whether promotional prices are to be shown in price nodes. Available values: "y" - show promotional prices, "n" - do not show promotional prices. (default value)
 * @property {(categories: Array<Object>) => PostProductsGetRequest} categories List of categories in which sought products are present.
 * @property {(producers: Array<Object>) => PostProductsGetRequest} producers List of manufacturers assigned to sought products.
 * @property {(productParams: Array<Object>) => PostProductsGetRequest} productParams List of sought products. This parameter can be used, when there have been no other parameter entered productIndexes.
 * @property {(productIndexes: Array<Object>) => PostProductsGetRequest} productIndexes List of sought products by indexes.
 * @property {(productShops: Array<Object>) => PostProductsGetRequest} productShops Data of stores product is assigned to.
 * @property {(productPromotionsIds: Array<Integer>) => PostProductsGetRequest} productPromotionsIds List of special offers, sought products are assigned to.
 * @property {(productDate: Object) => PostProductsGetRequest} productDate Settings concerning narrowing list of products found by date.
 * @property {(productParametersParams: Array<Object>) => PostProductsGetRequest} productParametersParams Parameters
 * @property {(productSeriesParams: Array<Object>) => PostProductsGetRequest} productSeriesParams Series, sought products are assigned to.
 * @property {(productUnits: Array<Object>) => PostProductsGetRequest} productUnits List of units of measure assigned to sought products.
 * @property {(productWarranties: Array<Object>) => PostProductsGetRequest} productWarranties Narrowing list of products by set warranties.
 * @property {(deliverersIds: Array<Integer>) => PostProductsGetRequest} deliverersIds Suppliers, sought products are assigned to.
 * @property {(containsText: String) => PostProductsGetRequest} containsText Product contains text (searches in short and long description). 
 * @property {(containsCodePart: String) => PostProductsGetRequest} containsCodePart Product code or it's part (based on producer's code, external product system code and code that is visible on a product card). Search is accesible only with available products.
 * @property {(productAvailableInStocks: Object) => PostProductsGetRequest} productAvailableInStocks Product availability in stocks
 * @property {(productAvailableInAuctions: Object) => PostProductsGetRequest} productAvailableInAuctions Product availability on auctions
 * @property {(resultsPage: Integer) => PostProductsGetRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => PostProductsGetRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(ordersBy: Array<Object>) => PostProductsGetRequest} ordersBy Possibility of sorting returned list
 * @property {(productSearchingLangId: String) => PostProductsGetRequest} productSearchingLangId Language ID that allows to search and return data in chosen language. This parameter is optional. If it's lacking, she search process unfolds in all available languages.
 * @property {(productSearchingCurrencyId: String) => PostProductsGetRequest} productSearchingCurrencyId Currency ID allowing to search and browse products in given currency. This parameter is optional, when it's lacking, the search process unfolds in all available currencies. 
 * @property {(returnPricesCurrency: String) => PostProductsGetRequest} returnPricesCurrency Currency ID allowing for returning all product prices in an indicated currency
 * @property {(productHasNote: String) => PostProductsGetRequest} productHasNote Annotation contains text.
 * @property {(productInExportToPriceComparisonSites: String) => PostProductsGetRequest} productInExportToPriceComparisonSites Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - Selected, "assign_selected" - Enable the visibility of the product in the export to price comparison sites passed in the priceComparisonSites node. Price comparison sites previously assigned to the commodity will be retained, "unassign_selected" - Disable product visibility in exports to price comparison sites passed in the priceComparisonSites node, "n" - invisible.
 * @property {(productInExportToAmazonMarketplace: String) => PostProductsGetRequest} productInExportToAmazonMarketplace Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible.
 * @property {(selectedAmazonMarketplacesList: Array<String>) => PostProductsGetRequest} selectedAmazonMarketplacesList List of Amazon regional sites to which the product is exported (only in case of "selected" option)
 * @property {(productInBestseller: String) => PostProductsGetRequest} productInBestseller Product is bestseller. Available values: "n" - no, "y" - yes.
 * @property {(productInNew: String) => PostProductsGetRequest} productInNew Product is new. Available values: "y" - is new, "n" - is not new.
 * @property {(searchByShops: Object) => PostProductsGetRequest} searchByShops Shops
 * @property {(productSearchPriceRange: Object) => PostProductsGetRequest} productSearchPriceRange Price range for sought products.
 * @property {(productVatRates: Array<Number>) => PostProductsGetRequest} productVatRates VAT value for sought products
 * @property {(productIsVatFree: String) => PostProductsGetRequest} productIsVatFree Is product VAT-free Allowed values "y" - yes, "n" - no.
 * @property {(productHasWholesalePrice: String) => PostProductsGetRequest} productHasWholesalePrice Product has defined wholesale price. Available values: "y" - has wholesale price, "n" - does not have wholesale price.
 * @property {(productInPersistent: String) => PostProductsGetRequest} productInPersistent Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock.
 * @property {(returnProductsVersions: String) => PostProductsGetRequest} returnProductsVersions Settings of products returned with variants All products with variants are returned by default Available values: version_all - returns all variants, version_main - returns only main variant.
 * @property {(productInSumInBasket: String) => PostProductsGetRequest} productInSumInBasket Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no.
 * @property {(productType: Object) => PostProductsGetRequest} productType Product type. Allowed values: "product_item" - Goods, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product.
 * @property {(productMenuItems: Object) => PostProductsGetRequest} productMenuItems An array of menu elements
 * @property {(productLocationId: Integer) => PostProductsGetRequest} productLocationId Warehouse location ID
 * @property {(productLocationTextId: String) => PostProductsGetRequest} productLocationTextId Warehouse location full path Use a backslash (\) as a separator, for example: M1\Section name\Location name If location_id parameter is provided, the full warehouse location path will not be taken into account
 * @property {(alwaysReturnProductShopSizesAttributes: Boolean) => PostProductsGetRequest} alwaysReturnProductShopSizesAttributes Return all size attributes regardless of whether product prices are the same as the base price or if they differ from it. Available values: 1 - all size attributes will be returned; 0 - only attributes of those sizes, where the prices will be different from the base price (default value) will be returned.
 * @property {(returnEmptyStocksWithReservation: Boolean) => PostProductsGetRequest} returnEmptyStocksWithReservation Returns reservation information regardless of inventory levels
 * @property {(picturesData: Object) => PostProductsGetRequest} picturesData Data for operations on individual photos
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsGetRequest} Method that enables extracting information about non-deleted products available in the administration panel
 */
export const postProductsGetProxy = (object) => {
    object.gate = { method: 'post', node: '/products/products/get' }
    return new Proxy(object, paramsProxy);
}