import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("listProductsReturnElements", () => {
    const params = idosell().listProducts.returnElements(["code"]).getParams();
    expect(params).toEqual({"returnElements":["code"]});
})

test("listProductsDates", () => {
    const params = idosell().listProducts.dates("2023-12-01",  "2023-12-31", "finished").getParams();
    expect(params).toEqual({"productDate":{"productDateBegin":"2023-12-01","productDateEnd":"2023-12-31","productDateMode":"finished"}});
})

test("listProductsPage", () => {
    const params = idosell().listProducts.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("listProductsIds", () => {
    const params = idosell().listProducts.ids([9,10,17]).getParams();
    expect(params).toEqual({"productParams":[{"productId":9},{"productId":10},{"productId":17}]});
})

test("listProductsByPrice", () => {
    const params = idosell().listProducts.byPrice(200, 500, "retail_price").getParams();
    expect(params).toEqual({"productSearchPriceRange":{"productSearchPriceMode":"retail_price","productSearchPriceMin":200,"productSearchPriceMax":500}});
})

test("listProductsByMenus", () => {
    const params = idosell().listProducts.byMenus([152]).getParams();
    expect(params).toEqual({"productMenuItems":{"menuItemsIds":[152]}});
})

test("listProductsByShops", () => {
    const params = idosell().listProducts.byShops([1,2]).getParams();
    expect(params).toEqual({"searchByShops":{"shopsIds":[1,2]}});
})

test("listProductsByProducers", () => {
    const params = idosell().listProducts.byProducers(1142347122).getParams();
    expect(params).toEqual({"producers":[{"producerId":1142347122}]});
})

test("listProductsByCategories", () => {
    const params = idosell().listProducts.byCategories(1214553884).getParams();
    expect(params).toEqual({"categories":[{"categoryId":1214553884}]});
})

test("listProductsByUnits", () => {
    const params = idosell().listProducts.byUnits(1).getParams();
    expect(params).toEqual({"productUnits":[{"unitId":1}]});
})

test("listProductsBySeries", () => {
    const params = idosell().listProducts.bySeries([1]).getParams();
    expect(params).toEqual({"productSeriesParams":[{"seriesId":1}]});
})

test("listProductsOnlyMainVersion", () => {
    const params = idosell().listProducts.onlyMainVersion().getParams();
    expect(params).toEqual({"returnProductsVersions":"version_main"});
})

test("listProductsByWarranties", () => {
    const params = idosell().listProducts.byWarranties([1]).getParams();
    expect(params).toEqual({"productWarranties":[{"warrantyId":1}]});
})

test("listProductsNotInStock", () => {
    const params = idosell().listProducts.inStock(false).getParams();
    expect(params).toEqual({"productAvailableInStocks":{"productIsAvailableInStocks":"n"}});
})

test("listProductsInAnyStock", () => {
    const params = idosell().listProducts.inStock().getParams();
    expect(params).toEqual({"productAvailableInStocks":{"productIsAvailableInStocks":"y"}});
})

test("listProductsInStock", () => {
    const params = idosell().listProducts.inStock([2,3]).getParams();
    expect(params).toEqual({"productAvailableInStocks":{"productIsAvailableInStocks":"y","productAvailableInStocksIds":[2,3]}});
})