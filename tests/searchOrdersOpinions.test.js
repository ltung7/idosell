import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchOrdersOpinionsPage", () => {
    const params = idosell().searchOrdersOpinions.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("searchOrdersOpinionsOrderBy", () => {
    const params = idosell().searchOrdersOpinions.orderBy("rating", false).checkParams();
    expect(params).toEqual({"ordersBy":[{"elementName":"rating","sortDirection":"ASC"}]});
})

test("searchOrdersOpinionsDates", () => {
    const params = idosell().searchOrdersOpinions.dates("2023-01-01", 1672704000000).checkParams();
    expect(params).toEqual({"dateRange":{"begin":"2023-01-01","end":"2023-01-03"}});
})

test("searchOrdersOpinionsOrderSerialNumber", () => {
    const params = idosell().searchOrdersOpinions.orderSerialNumber(3512).checkParams();
    expect(params).toEqual({"orders":{"type":"serialNumber","value":3512}});
})

test("searchOrdersOpinionsClientLogin", () => {
    const params = idosell().searchOrdersOpinions.clientLogin("user@mail.com").checkParams();
    expect(params).toEqual({"clients":{"type":"login","value":"user@mail.com"}});
})

test("searchOrdersOpinionsClientId", () => {
    const params = idosell().searchOrdersOpinions.clientId(3223).checkParams();
    expect(params).toEqual({"clients":{"type":"id","value":3223}});
})