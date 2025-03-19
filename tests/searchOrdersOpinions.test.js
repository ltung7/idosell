import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersOpinionsPage", () => {
    const params = idosell().getOrdersOpinions.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getOrdersOpinionsOrderBy", () => {
    const params = idosell().getOrdersOpinions.orderBy("rating", false).getParams();
    expect(params).toEqual({"ordersBy":[{"elementName":"rating","sortDirection":"ASC"}]});
})

test("getOrdersOpinionsDates", () => {
    const params = idosell().getOrdersOpinions.dates("2023-01-01", 1672704000000).getParams();
    expect(params).toEqual({"dateRange":{"begin":"2023-01-01","end":"2023-01-03"}});
})

test("getOrdersOpinionsOrderSerialNumber", () => {
    const params = idosell().getOrdersOpinions.orderSerialNumber(3512).getParams();
    expect(params).toEqual({"orders":{"type":"serialNumber","value":3512}});
})

test("getOrdersOpinionsClientLogin", () => {
    const params = idosell().getOrdersOpinions.clientLogin("user@mail.com").getParams();
    expect(params).toEqual({"clients":{"type":"login","value":"user@mail.com"}});
})

test("getOrdersOpinionsClientId", () => {
    const params = idosell().getOrdersOpinions.clientId(3223).getParams();
    expect(params).toEqual({"clients":{"type":"id","value":3223}});
})