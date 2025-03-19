import { paramsProxy } from "../params.js";
import { nest, dateRangeType, orderBy, arrayOfObjects, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'post', node: '/products/products/search' };
    object.custom = {
        byMenus: nest("menuItemsIds", "productMenuItems", {}, true),
        byShops: nest("shopsIds", "searchByShops", {}, true),
        dates: dateRangeType({"nodeName":"productDate","fromName":"productDateBegin","toName":"productDateEnd","typeName":"productDateMode","defaultType":"added"}),
        orderBy,
        shops: arrayOfObjects("productShops", "shopId"),
        ids: arrayOfObjects("productParams", "productId"),
        byProducers: arrayOfObjects("producers", "producerId"),
        byCategories: arrayOfObjects("categories", "categoryId"),
        byUnits: arrayOfObjects("productUnits", "unitId"),
        bySeries: arrayOfObjects("productSeriesParams", "seriesId"),
        byWarranties: arrayOfObjects("productWarranties", "warrantyId"),
        byIndexes: arrayOfObjects("productIndexes", "productIndex"),
        onlyMainVersion: (onlyMain = true) => ({ returnProductsVersions: onlyMain ? "version_main" : "version_all" }),
        byPrice: (minPrice, maxPrice, priceType = "retail_price") => ({ productSearchPriceRange: { productSearchPriceMode: priceType, productSearchPriceMin: minPrice, productSearchPriceMax: maxPrice }}),
        inStock: (stockIds = null) => { const productAvailableInStocks = { productIsAvailableInStocks: stockIds === false ? "n" : "y" }; if (stockIds) { if (typeof stockIds === "number") stockIds = [ stockIds ]; if (Array.isArray(stockIds)) productAvailableInStocks.productAvailableInStocksIds = stockIds; }; return { productAvailableInStocks }},
        page
    };
    return new Proxy(object, paramsProxy);
}