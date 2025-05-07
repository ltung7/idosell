import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchProductsReturnElements", () => {
    const params = idosell().searchProducts.returnElements(["code"]).getParams();
    expect(params).toEqual({"returnElements":["code"]});
})

test("searchProductsDates", () => {
    const params = idosell().searchProducts.dates("2023-12-01",  "2023-12-31", "finished").getParams();
    expect(params).toEqual({"productDate":{"productDateBegin":"2023-12-01","productDateEnd":"2023-12-31","productDateMode":"finished"}});
})

test("searchProductsPage", () => {
    const params = idosell().searchProducts.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("searchProductsIds", () => {
    const params = idosell().searchProducts.ids([9,10,17]).getParams();
    expect(params).toEqual({"productParams":[{"productId":9},{"productId":10},{"productId":17}]});
})

test("searchProductsByPrice", () => {
    const params = idosell().searchProducts.byPrice(200, 500, "retail_price").getParams();
    expect(params).toEqual({"productSearchPriceRange":{"productSearchPriceMode":"retail_price","productSearchPriceMin":200,"productSearchPriceMax":500}});
})

test("searchProductsByMenus", () => {
    const params = idosell().searchProducts.byMenus([152]).getParams();
    expect(params).toEqual({"productMenuItems":{"menuItemsIds":[152]}});
})

test("searchProductsByShops", () => {
    const params = idosell().searchProducts.byShops([1,2]).getParams();
    expect(params).toEqual({"searchByShops":{"shopsIds":[1,2]}});
})

test("searchProductsByProducers", () => {
    const params = idosell().searchProducts.byProducers(1142347122).getParams();
    expect(params).toEqual({"producers":[{"producerId":1142347122}]});
})

test("searchProductsByCategories", () => {
    const params = idosell().searchProducts.byCategories(1214553884).getParams();
    expect(params).toEqual({"categories":[{"categoryId":1214553884}]});
})

test("searchProductsByUnits", () => {
    const params = idosell().searchProducts.byUnits(1).getParams();
    expect(params).toEqual({"productUnits":[{"unitId":1}]});
})

test("searchProductsBySeries", () => {
    const params = idosell().searchProducts.bySeries([1]).getParams();
    expect(params).toEqual({"productSeriesParams":[{"seriesId":1}]});
})

test("searchProductsOnlyMainVersion", () => {
    const params = idosell().searchProducts.onlyMainVersion().getParams();
    expect(params).toEqual({"returnProductsVersions":"version_main"});
})

test("searchProductsByWarranties", () => {
    const params = idosell().searchProducts.byWarranties([1]).getParams();
    expect(params).toEqual({"productWarranties":[{"warrantyId":1}]});
})

test("searchProductsNotInStock", () => {
    const params = idosell().searchProducts.inStock(false).getParams();
    expect(params).toEqual({"productAvailableInStocks":{"productIsAvailableInStocks":"n"}});
})

test("searchProductsInAnyStock", () => {
    const params = idosell().searchProducts.inStock().getParams();
    expect(params).toEqual({"productAvailableInStocks":{"productIsAvailableInStocks":"y"}});
})

test("searchProductsInStock", () => {
    const params = idosell().searchProducts.inStock([2,3]).getParams();
    expect(params).toEqual({"productAvailableInStocks":{"productIsAvailableInStocks":"y","productAvailableInStocksIds":[2,3]}});
})