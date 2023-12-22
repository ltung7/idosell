import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("listOrdersUnfinishedOrdersStatuses", () => {
    const params = idosell().listOrdersUnfinished.ordersStatuses(["packed"]).getParams();
    expect(params).toEqual({"ordersStatuses":["packed"]});
})

test("listOrdersUnfinishedOrderType", () => {
    const params = idosell().listOrdersUnfinished.orderType("wholesale").getParams();
    expect(params).toEqual({"orderType":"wholesale"});
})

test("listOrdersUnfinishedOrderBy", () => {
    const params = idosell().listOrdersUnfinished.orderBy("sn", false).getParams();
    expect(params).toEqual({"ordersBy":[{"elementName":"sn","sortDirection":"ASC"}]});
})

test("listOrdersUnfinishedLogins", () => {
    const params = idosell().listOrdersUnfinished.logins(["iai_demo"]).getParams();
    expect(params).toEqual({"clients":[{"type":"login","clientLogin":"iai_demo"}]});
})

test("listOrdersUnfinishedPage", () => {
    const params = idosell().listOrdersUnfinished.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("listOrdersUnfinishedStockIds", () => {
    const params = idosell().listOrdersUnfinished.stockIds(2).getParams();
    expect(params).toEqual({"stocks":[{"stockId":2}]});
})