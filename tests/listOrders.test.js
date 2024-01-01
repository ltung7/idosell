import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("listOrdersOrdersStatuses", () => {
    const params = idosell().listOrders.ordersStatuses(["packed"]).getParams();
    expect(params).toEqual({"ordersStatuses":["packed"]});
})

test("listOrdersOrderType", () => {
    const params = idosell().listOrders.orderType("wholesale").getParams();
    expect(params).toEqual({"orderType":"wholesale"});
})

test("listOrdersOrderBy", () => {
    const params = idosell().listOrders.orderBy("sn", false).getParams();
    expect(params).toEqual({"ordersBy":[{"elementName":"sn","sortDirection":"ASC"}]});
})

test("listOrdersLogins", () => {
    const params = idosell().listOrders.logins(["iai_demo"]).getParams();
    expect(params).toEqual({"clients":[{"type":"login","clientLogin":"iai_demo"}]});
})

test("listOrdersPage", () => {
    const params = idosell().listOrders.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("listOrdersStockIds", () => {
    const params = idosell().listOrders.stockIds(2).getParams();
    expect(params).toEqual({"stocks":[{"stockId":2}]});
})

test("listOrdersHasProductAnySize", () => {
    const params = idosell().listOrders.hasProduct(13).getParams();
    expect(params).toEqual({"products":[{"productId":13}]});
})

test("listOrdersHasProductWithSize", () => {
    const params = idosell().listOrders.hasProduct(13,4).getParams();
    expect(params).toEqual({"products":[{"productId":13,"sizeId":4}]});
})

test("listOrdersByPackageNumbers", () => {
    const params = idosell().listOrders.byPackageNumbers([5003724016]).getParams();
    expect(params).toEqual({"packages":{"orderHasPackageNumbers":"y","packagesNumbers":[5003724016]}});
})

test("listOrdersHasPackage", () => {
    const params = idosell().listOrders.hasPackage().getParams();
    expect(params).toEqual({"packages":{"orderHasPackageNumbers":"y"}});
})

test("listOrdersShopIds", () => {
    const params = idosell().listOrders.shopIds([3]).getParams();
    expect(params).toEqual({"orderSource":{"shopsIds":[3]}});
})

test("listOrdersFromAllegro", () => {
    const params = idosell().listOrders.fromAllegro().getParams();
    expect(params).toEqual({"orderSource":{"auctionsParams":{"auctionsServicesNames":["allegro"]}}});
})