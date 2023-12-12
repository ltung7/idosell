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
    const params = idosell().listOrders.logins(["test"]).getParams();
    expect(params).toEqual({"clients":[{"clientLogin":"test"}]});
})

test("listOrdersPage", () => {
    const params = idosell().listOrders.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("listOrdersStockIds", () => {
    const params = idosell().listOrders.stockIds(2).getParams();
    expect(params).toEqual({"stocks":[{"stockId":2}]});
})