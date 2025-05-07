import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchOrdersUnfinishedOrdersStatuses", () => {
    const params = idosell().searchOrdersUnfinished.ordersStatuses(["packed"]).getParams();
    expect(params).toEqual({"ordersStatuses":["packed"]});
})

test("searchOrdersUnfinishedOrderType", () => {
    const params = idosell().searchOrdersUnfinished.orderType("wholesale").getParams();
    expect(params).toEqual({"orderType":"wholesale"});
})

test("searchOrdersUnfinishedOrderBy", () => {
    const params = idosell().searchOrdersUnfinished.orderBy("sn", false).getParams();
    expect(params).toEqual({"ordersBy":[{"elementName":"sn","sortDirection":"ASC"}]});
})

test("searchOrdersUnfinishedLogins", () => {
    const params = idosell().searchOrdersUnfinished.logins(["iai_demo"]).getParams();
    expect(params).toEqual({"clients":[{"type":"login","clientLogin":"iai_demo"}]});
})

test("searchOrdersUnfinishedPage", () => {
    const params = idosell().searchOrdersUnfinished.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("searchOrdersUnfinishedStockIds", () => {
    const params = idosell().searchOrdersUnfinished.stockIds(2).getParams();
    expect(params).toEqual({"stocks":[{"stockId":2}]});
})