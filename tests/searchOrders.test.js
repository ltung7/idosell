import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchOrdersOrdersStatuses", () => {
    const params = idosell().searchOrders.ordersStatuses(["packed"]).checkParams();
    expect(params).toEqual({"ordersStatuses":["packed"]});
})

test("searchOrdersOrderType", () => {
    const params = idosell().searchOrders.orderType("wholesale").checkParams();
    expect(params).toEqual({"orderType":"wholesale"});
})

test("searchOrdersOrderBy", () => {
    const params = idosell().searchOrders.orderBy("sn", false).checkParams();
    expect(params).toEqual({"ordersBy":[{"elementName":"sn","sortDirection":"ASC"}]});
})

test("searchOrdersLogins", () => {
    const params = idosell().searchOrders.logins(["iai_demo"]).checkParams();
    expect(params).toEqual({"clients":[{"type":"login","clientLogin":"iai_demo"}]});
})

test("searchOrdersPage", () => {
    const params = idosell().searchOrders.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("searchOrdersStockIds", () => {
    const params = idosell().searchOrders.stockIds(2).checkParams();
    expect(params).toEqual({"stocks":[{"stockId":2}]});
})

test("searchOrdersHasProductAnySize", () => {
    const params = idosell().searchOrders.hasProduct(13).checkParams();
    expect(params).toEqual({"products":[{"productId":13}]});
})

test("searchOrdersHasProductWithSize", () => {
    const params = idosell().searchOrders.hasProduct(13,4).checkParams();
    expect(params).toEqual({"products":[{"productId":13,"sizeId":4}]});
})

test("searchOrdersByPackageNumbers", () => {
    const params = idosell().searchOrders.byPackageNumbers([5003724016]).checkParams();
    expect(params).toEqual({"packages":{"orderHasPackageNumbers":"y","packagesNumbers":[5003724016]}});
})

test("searchOrdersHasPackage", () => {
    const params = idosell().searchOrders.hasPackage().checkParams();
    expect(params).toEqual({"packages":{"orderHasPackageNumbers":"y"}});
})

test("searchOrdersShopIds", () => {
    const params = idosell().searchOrders.shopIds([3]).checkParams();
    expect(params).toEqual({"orderSource":{"shopsIds":[3]}});
})

test("searchOrdersFromAllegro", () => {
    const params = idosell().searchOrders.fromAllegro().checkParams();
    expect(params).toEqual({"orderSource":{"auctionsParams":{"auctionsServicesNames":["allegro"]}}});
})